import { HeroUI } from "@/app/types/schema";
import { urlFor } from "@/app/sanity-api/sanity-utils";
import Image from "next/image";
import React from "react";
import AOS from "../ui/AOS";

type Props = {
  input: HeroUI;
};

const ModuleHeroUI = ({ input }: Props) => {
  const { image } = input;
  return (
    <section className='module module--hero-ui'>
      {image && image.image && (
        // <AOS>
        <Image
          src={urlFor(image.image?.asset, 2000)}
          width={image.image.asset?.metadata?.dimensions.width || 2000}
          height={image.image.asset?.metadata?.dimensions.height || 2000}
          alt={image.caption || ""}
          sizes='100vw'
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: `${image.image.asset?.metadata?.dimensions.width} / ${image.image.asset?.metadata?.dimensions.height}`,
            // objectFit: "cover",
          }}
          blurDataURL={image.image.asset?.metadata?.lqip}
          // placeholder='blur'
          // placeholder={logo.asset?.metadata?.lqip}
        />
        // </AOS>
      )}
    </section>
  );
};

export default ModuleHeroUI;
