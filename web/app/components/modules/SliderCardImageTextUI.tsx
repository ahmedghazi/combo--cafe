import { SliderCardImageTextUI } from "@/app/types/schema";
import { _localizeField } from "@/app/sanity-api/utils";
import React from "react";
import Slider from "../ui/slick-slider";
import Card from "../ui/Card";

type Props = {
  input: SliderCardImageTextUI;
};

const ModuleSliderCardImageTextUI = ({ input }: Props) => {
  const { title, items, gridSize, autoplay } = input;

  return (
    <section className='module module--slider-card-image-text-ui'>
      <div className='inner'>
        <h2 className='headline'>{_localizeField(title)}</h2>
        <div className='slider-container -px-sm'>
          <Slider
            settingsOverride={{
              autoplay: false,
              slidesToShow: gridSize || 3,
              slidesToScroll: gridSize || 3,
              dots: true,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                    // dots: true
                  },
                },
              ],
            }}>
            {items?.map((item, i) => (
              <div className='slide px-sm' key={i}>
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
        </div>
      </div>
    </section>
  );
};

export default ModuleSliderCardImageTextUI;
