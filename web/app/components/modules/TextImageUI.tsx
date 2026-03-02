import React from "react";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { TextImageUI } from "@/app/types/schema";
import { SanityImageAsset } from "sanity-codegen";
import AOS from "../ui/AOS";
import Image from "next/image";
import { _localizeField } from "@/app/sanity-api/utils";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import { urlFor } from "@/app/sanity-api/sanity-utils";

type Props = {
  input: TextImageUI;
};

const ModuleTextImageUI = ({ input }: Props) => {
  const { direction, title, text, image } = input;
  // console.log(title);

  return (
    <section className={clsx("module module--text-image-ui")}>
      <div className='inner'>
        <div className={clsx("row", direction)}>
          <div className='col-md-6 col-xs-12'>
            <AOS>
              <h2 className={clsx("headline")}>{_localizeField(title)}</h2>
            </AOS>
            <AOS>
              <div className='mb-md'>
                <div className='text'>
                  <PortableText
                    value={_localizeField(text)}
                    components={portableTextComponents}
                  />
                </div>
              </div>
            </AOS>
          </div>
          <div className='col-md-6 col-xs-12'>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleTextImageUI;
