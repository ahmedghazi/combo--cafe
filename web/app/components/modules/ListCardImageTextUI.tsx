import { ListCardImageTextUI } from "@/app/types/schema";
import { _localizeField } from "@/app/utils/utils";
import React from "react";
import Card from "../ui/Card";
import AOS from "../ui/AOS";
import clsx from "clsx";
import Slider from "../ui/slick-slider";

type Props = {
  input: ListCardImageTextUI;
};

const ModuleListCardImageTextUI = ({ input }: Props) => {
  // const { title, items, gridSize, sliderShow } = input;
  const { title, items, gridSize } = input;
  // console.log(input);
  return (
    <section className='module module--list-card-image-text-ui'>
      <div className='inner'>
        <h2 className='headline'>{_localizeField(title)}</h2>
        {/* <div className="slider-container -px-sm">
          {sliderShow && items && items?.length >= 3 && (
            <Slider
              settingsOverride={{
                slidesToShow: gridSize || 3,
                slidesToScroll: gridSize || 3,
                dots: true,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {items?.map((item, i) => (
                <div className="slide md:px-sm" key={i}>
                  <Card
                    key={i}
                    image={item.image}
                    title={_localizeField(item.title)}
                    tag={_localizeField(item.tag)}
                    text={_localizeField(item.text)}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        {!sliderShow && (
          <div
            className={clsx(
              "grid gap-xl md:gap-y-xl md:gap-md",
              `md:grid-cols-${gridSize || 3}`
            )}
          >
            {items?.map((item, i) => (
              <div key={i}>
                <AOS delay={i / 5}>
                  <Card
                    key={i}
                    image={item.image}
                    title={_localizeField(item.title)}
                    tag={_localizeField(item.tag)}
                    text={_localizeField(item.text)}
                  />
                </AOS>
              </div>
            ))}
          </div>
        )}
        */}
        <div
          className={clsx(
            "grid gap-xl md:gap-y-xl md:gap-md",
            `md:grid-cols-${gridSize || 3}`
          )}>
          {items?.map((item, i) => (
            <div key={i}>
              <AOS delay={i / 5}>
                <Card
                  key={i}
                  image={item.image}
                  title={_localizeField(item.title)}
                  tag={_localizeField(item.tag)}
                  text={_localizeField(item.text)}
                />
              </AOS>
            </div>
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(input.items, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListCardImageTextUI;
