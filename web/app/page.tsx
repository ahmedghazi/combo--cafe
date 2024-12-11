import { draftMode } from "next/headers";
import { Metadata } from "next";
import website from "./config/website";
import { getHome, homeQ } from "./utils/sanity-queries";
import { Home } from "./types/schema";
import { getClient } from "./utils/sanity-client";
import ContentModulaire from "./components/ContentModulaire";

export const revalidate = 3600; // revalidate every hour
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getHome();
  return {
    title: `${data?.seo?.metaTitle || data?.title?.fr || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

const HomePage: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode();
  let data: Home;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      homeQ,
      params
    );
  } else {
    data = (await getHome()) as Home;
  }
  // console.log(data);
  if (!data) return <div>please edit page</div>;
  return (
    <div className="template template--home" data-template="home">
      {/* <ContentLanding input={data} /> */}
      {data.modules && <ContentModulaire modules={data.modules} />}
    </div>
  );
};

export default HomePage;
