import { draftMode } from "next/headers";
import { Metadata } from "next";
import website from "./config/website";
import { getHome, HOME_QUERY } from "./sanity-api/sanity-queries";
import { Home } from "./types/schema";
import { notFound } from "next/navigation";
import { getClient } from "./sanity-api/sanity.client";
import ContentModulaire from "./components/ContentModulaire";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHome();
  return {
    title: `${data?.seo?.metaTitle || data?.title?.fr || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

export const revalidate = 3600;
// revalidate every hour

const HomePage = async function Page() {
  const { isEnabled } = await draftMode();

  let data: Home;
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      HOME_QUERY,
      {
        slug: "/",
      },
    );
  } else {
    data = (await getHome()) as Home;
  }

  if (!data) return notFound();

  return (
    <div className='template template--home' data-template='home'>
      {data.modules && <ContentModulaire modules={data.modules} />}
    </div>
  );
};

export default HomePage;
