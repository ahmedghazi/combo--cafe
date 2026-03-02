import React from "react";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { SanityReference, TextUI } from "@/app/types/schema";
import { SanityImageAsset } from "sanity-codegen";
import AOS from "../ui/AOS";
import { stegaClean } from "@sanity/client/stega";
import { _localizeField } from "@/app/sanity-api/utils";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";

type Props = {
  input: TextUI;
};

const ModuleTextUI = ({ input }: Props) => {
  const rawLook = stegaClean(input.look);
  const {
    look,
    title,
    titleCentered,
    text,
    backgroundColor,
    backgroundImage,
    foregroundColor,
  } = input;
  // console.log(input);

  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
    "--backgroundImage": backgroundImage?.asset.url,
    // backgroundImage: `url(${backgroundImage?.asset.url})`,
  } as React.CSSProperties;
  const styleBgImage = {
    backgroundImage: `url(${backgroundImage?.asset.url})`,
  };

  const hasImage = backgroundImage && backgroundImage?.asset.url !== "";

  return (
    <section className={clsx("module module--text-ui", `text-${look}`)}>
      <div className={clsx("inner", `is-${look}`)} style={style}>
        {hasImage && (
          <>
            <div className='bg-image' style={styleBgImage}></div>
            <div
              className='bg-blend'
              style={{
                backgroundColor: backgroundColor,
              }}></div>
          </>
        )}

        <div className='row center-xs'>
          <div className='col-md-10 col-xs-12'>
            {rawLook === "default" && (
              <>
                {title && (
                  <AOS>
                    <div className={titleCentered ? "text-center" : ""}>
                      <h2 className={clsx("headline")}>
                        {_localizeField(title)}
                      </h2>
                    </div>
                  </AOS>
                )}
                <div className='text mx-auto'>
                  {text && (
                    <AOS>
                      <PortableText
                        value={_localizeField(text)}
                        components={portableTextComponents}
                      />
                    </AOS>
                  )}
                </div>
              </>
            )}
            {look === "offset" && (
              <div className='mx-auto'>
                {title && (
                  <AOS>
                    <div className={titleCentered ? "text-center" : ""}>
                      <h2 className={clsx("headline")}>
                        {_localizeField(title)}
                      </h2>
                    </div>
                  </AOS>
                )}

                <div className='row'>
                  <div className='col-sm-6 col-sm-offset-3 col-xs-12'>
                    <div className='text '>
                      {text && (
                        <AOS>
                          <PortableText
                            value={_localizeField(text)}
                            components={portableTextComponents}
                          />
                        </AOS>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {look === "columns" && (
              <>
                {title && (
                  <AOS>
                    <div className={titleCentered ? "text-center" : ""}>
                      <h2 className={clsx("headline")}>
                        {_localizeField(title)}
                      </h2>
                    </div>
                  </AOS>
                )}
                {text && (
                  <AOS>
                    <div className='text'>
                      <PortableText
                        value={_localizeField(text)}
                        components={portableTextComponents}
                      />
                    </div>
                  </AOS>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleTextUI;
