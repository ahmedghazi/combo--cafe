import React, { useEffect, useRef, useState } from "react";
import { Figure, HeroSplitScrollUI } from "@/app/types/schema";
import { urlFor } from "@/app/utils/sanity-utils";
import Image from "next/image";
import { _localizeField } from "@/app/utils/utils";
import { infinitScroll } from "@/app/utils/infinite-scroll-plugin";
import { infinitScrollOnePage } from "@/app/utils/infinite-scroll-plugin-one-page";
import useDeviceDetect from "@/app/hooks/useDeviceDetect";

type Props = {
  input: HeroSplitScrollUI;
};

const ModuleHeroSplitScrollUI = ({ input }: Props) => {
  const { itemsLeft, itemsRight } = input;
  const totalImages: number =
    (itemsLeft?.length || 0) + (itemsRight?.length || 0);

  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState<number>(0);
  const [loadCount, setLoadCount] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);
  const { isMobile } = useDeviceDetect();
  const scale = isMobile ? 0.2 : 0.4;

  useEffect(() => {
    if (!ready) return;
    if (ref && ref.current) {
      const itemsLeft = Array.from(
        ref.current.querySelectorAll(
          ".column--left article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScrollOnePage(ref.current, itemsLeft, "down", onScroll, true);

      const itemsRight = Array.from(
        ref.current.querySelectorAll(
          ".column--right article"
        ) as NodeListOf<HTMLElement>
      );
      infinitScrollOnePage(ref.current, itemsRight, "up", onScroll, true);
    }
  }, [ready]);

  const onScroll = (val: number) => {
    // const nextVal = rotate + 180 * val;
    // console.log(val);
    setRotate(val);
  };

  const _handleImagesLoaded = () => {
    setLoadCount((prev) => prev + 1);
  };

  useEffect(() => {
    // console.log(loadCount);
    setReady(loadCount === totalImages);
  }, [loadCount, totalImages]);

  // const _titleLeftLocalized = _localizeField(titleLeft);
  // const _titleRightLocalized = _localizeField(titleRight);

  return (
    <section className="module module--hero-split-scroll-ui">
      <div className="scroller grid grid-rows-2 grid-cols-2" ref={ref}>
        <div className="column column--left">
          {itemsLeft &&
            itemsLeft.map((item: Figure | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.image.asset, 1500)}
                  alt={item.caption || ""}
                  priority={true}
                  width={item?.image.asset.metadata.dimensions.width}
                  height={item?.image.asset.metadata.dimensions.height}
                  blurDataURL={item?.image.asset?.metadata?.lqip}
                  placeholder="blur"
                  onLoad={_handleImagesLoaded}
                />
                <div className="title headline">
                  {ready ? (
                    <span>{item.caption} </span>
                  ) : (
                    <span>{loadCount}</span>
                  )}
                </div>
              </article>
            ))}
        </div>
        <div className="column column--right">
          {itemsRight &&
            itemsRight.map((item: Figure | any, i: number) => (
              <article className="item" key={i}>
                <Image
                  src={urlFor(item?.image.asset, 1500)}
                  alt={item.caption || ""}
                  priority={true}
                  width={item?.image.asset.metadata.dimensions.width}
                  height={item?.image.asset.metadata.dimensions.height}
                  blurDataURL={item?.image.asset?.metadata?.lqip}
                  placeholder="blur"
                  onLoad={_handleImagesLoaded}
                />
                <div className="title headline">
                  {ready ? (
                    <span>{item.caption} </span>
                  ) : (
                    <span>{totalImages}</span>
                  )}
                </div>
              </article>
            ))}
        </div>

        <svg
          id="Calque_1"
          data-name="Calque 1"
          xmlns="http://www.w3.org/2000/svg"
          width="841.89"
          height="595.28"
          viewBox="0 0 841.89 595.28"
          className="transition-transform duration-400"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
          }}
        >
          <path
            fill="white"
            d="M321.36,283l19.69,34.1c16.3-9.41,29-10.17,36.93,3.55,10.52,18.23-4.33,35.09-38.64,54.9-34.1,19.69-55.36,26-66.25,7.08-8.42-14.58,2.43-26,18.09-35l-19.69-34.1c-34.53,19.93-45.37,48.21-24.81,83.81,22.53,39,64.15,39.31,112,11.7,48.47-28,68.39-63.79,46.23-102.18-20.18-35-51.36-42.4-83.53-23.83"
          />
          <path
            fill="white"
            d="M484.53,219.74H445.15c0,18.82-5.7,30.21-21.54,30.21-21,0-28.23-21.3-28.23-60.92,0-39.37,5.2-60.92,27-60.92,16.84,0,21.3,15.1,21.3,33.18H483c0-39.87-19.07-63.39-60.17-63.39-45.07,0-66.12,35.9-66.12,91.13,0,56,21,91.13,65.37,91.13,40.36,0,62.4-23.28,62.4-60.42"
          />
          <path
            fill="white"
            d="M550,293.38c-48.47-28-89.44-27.33-111.61,11.05-20.18,35-11,65.68,21.13,84.25l19.69-34.1c-16.3-9.41-23.32-20-15.39-33.76,10.52-18.23,32.56-13.8,66.87,6,34.1,19.69,50.15,35,39.26,53.83-8.42,14.58-23.73,10.89-39.38,1.85l-19.69,34.1c34.53,19.93,64.43,15.18,85-20.41,22.53-39,2-75.21-45.86-102.82"
          />
        </svg>
      </div>
    </section>
  );
};

export default ModuleHeroSplitScrollUI;
