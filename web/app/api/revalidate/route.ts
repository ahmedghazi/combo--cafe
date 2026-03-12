import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  console.log("secret", secret);
  //
  // Vérifie le token secret
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const type = body.type || body._type;
    const slug = body.slug || body.slug?.current;

    console.log("type", type);
    console.log("slug", slug);

    const singletonTypes = ["home", "landing", "infos", "settings"];
    const pageTypes = ["page", "pageModulaire"];
    const projectTypes = ["project", "studio", "lieu"];

    if (singletonTypes.includes(type)) {
      revalidatePath("/");
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    if (pageTypes.includes(type)) {
      revalidatePath("/");
      if (slug) revalidatePath(`/${slug}`);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    if (projectTypes.includes(type)) {
      revalidatePath("/");
      if (slug) revalidatePath(`/${type}/${slug}`);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    // Fallback: revalidate everything
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Erreur lors de la revalidation" },
      { status: 500 },
    );
  }
}
