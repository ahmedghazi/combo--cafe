import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Vérifie le token secret
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, type } = body;

    if (type === "page") {
      // Revalide une page spécifique
      revalidatePath(`/${slug}`);
      // Ou revalide toutes les pages de projets
      revalidatePath("/");

      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
      });
    }

    return NextResponse.json(
      {
        message: "Type non reconnu",
      },
      { status: 400 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Erreur lors de la revalidation",
      },
      { status: 500 },
    );
  }
}
