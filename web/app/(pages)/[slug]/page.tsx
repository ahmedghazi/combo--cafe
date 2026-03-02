import ContentModulaire from "@/app/components/ContentModulaire";
import website from "@/app/config/website";
import {
  getPageModulaire,
  PAGE_MODULAIRE_QUERY,
} from "@/app/sanity-api/sanity-queries";
import { getClient } from "@/app/sanity-api/sanity.client";
import { PageModulaire } from "@/app/types/schema";

import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import React from "react";

export const revalidate = 3600; // revalidate every hour

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPageModulaire(slug);
  return {
    title: `${data?.seo?.metaTitle || data?.title || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  let data: PageModulaire;
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      PAGE_MODULAIRE_QUERY,
      { slug: slug },
    );
  } else {
    data = (await getPageModulaire(slug)) as PageModulaire;
  }

  if (!data) return <div>please edit page</div>;
  return (
    <div
      className='template template--page-modulaire'
      data-template='page-modulaire'>
      {data.modules && <ContentModulaire modules={data.modules} />}
    </div>
  );
};

export default Page;
