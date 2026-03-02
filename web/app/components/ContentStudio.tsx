import React from "react";
import { Studio } from "../types/schema";
import AOS from "./ui/AOS";
import Image from "next/image";
import { urlFor } from "../sanity-api/sanity-utils";
import { _localizeField } from "../sanity-api/utils";
import { PortableText } from "next-sanity";
import portableTextComponents from "../sanity-api/portableTextComponents";
import SummaryDetailFramer from "./ui/SummaryDetailFramer";
import Slider from "./ui/slick-slider";
type Props = {
  input: Studio;
};

const ContentStudio = ({ input }: Props) => {
  const { imageHero, SliderHero, title, location, text, infos } = input;

  return (
    <article className="content--studio">
      <div className="px-m-md md:px-50">
        {SliderHero && SliderHero.length > 0 && (
          <div className="slider-hero">
            <Slider
              settingsOverride={{
                autoplay: true,
              }}
            >
              {SliderHero.map((item, i) => (
                <div className="slide" key={i}>
                  {item?.image && (
                    <Image
                      src={urlFor(item?.image?.asset, 2000)}
                      width={
                        item?.image.asset?.metadata?.dimensions.width || 2000
                      }
                      height={
                        item?.image.asset?.metadata?.dimensions.height || 2000
                      }
                      alt={item.caption || ""}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100vh",
                        aspectRatio: `${item?.image.asset?.metadata?.dimensions.width} / ${item?.image.asset?.metadata?.dimensions.height}`,
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      blurDataURL={item?.image.asset?.metadata?.lqip}
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        )}
        {!SliderHero && imageHero && imageHero?.image && (
          <div className="image-hero">
            <AOS>
              <Image
                src={urlFor(imageHero?.image?.asset, 2000)}
                width={
                  imageHero?.image.asset?.metadata?.dimensions.width || 2000
                }
                height={
                  imageHero?.image.asset?.metadata?.dimensions.height || 2000
                }
                alt={imageHero.caption || ""}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100vh",
                  aspectRatio: `${imageHero?.image.asset?.metadata?.dimensions.width} / ${imageHero?.image.asset?.metadata?.dimensions.height}`,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                blurDataURL={imageHero?.image.asset?.metadata?.lqip}
                // placeholder='blur'
                // placeholder={logo.asset?.metadata?.lqip}
              />
            </AOS>
          </div>
        )}
        <div className="md:px-50 pt-50">
          <div className="row center-xs">
            <div className="col-md-10 col-xs-12">
              <AOS>
                <div className="header mb-xl">
                  <div className="location cartouche">{location}</div>
                  <h4 className="headline text-center">
                    <div>{_localizeField(title)}</div>
                  </h4>
                </div>
              </AOS>
              <div className="grid md:grid-cols-2 gap-md">
                <AOS>
                  <div className="text mb-lg">
                    <PortableText
                      value={_localizeField(text)}
                      components={portableTextComponents}
                    />
                  </div>
                </AOS>
                <div>
                  {infos?.map((item, i) => (
                    <div key={i} className="mb-xl">
                      <AOS>
                        <SummaryDetailFramer
                          summary={
                            <button className="btn--pill">
                              {_localizeField(item.summary)}
                            </button>
                          }
                          detail={
                            <div className="text pt-xl">
                              <PortableText
                                value={_localizeField(item.detail)}
                                components={portableTextComponents}
                              />
                            </div>
                          }
                          scrollIntoView={false}
                        />
                      </AOS>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentStudio;
