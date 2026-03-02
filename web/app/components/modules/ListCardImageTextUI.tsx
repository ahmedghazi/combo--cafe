import {
  ListCardImageTextUI,
  LocaleString,
  SanityKeyedReference,
  Tag,
} from "@/app/types/schema";
import { _localizeField } from "@/app/sanity-api/utils";
import React, { useState } from "react";
import Card from "../ui/Card";
import AOS from "../ui/AOS";
import clsx from "clsx";
// import Slider from "../ui/slick-slider";

type Props = {
  input: ListCardImageTextUI;
};

const ModuleListCardImageTextUI = ({ input }: Props) => {
  const { title, items, gridSize, navTags } = input;
  const [tag, setTag] = useState<string>("");

  // console.log(input);
  const updateTag = (val: string) => {
    if (!val) return;
    setTag(val === tag ? "" : val);
  };

  const getIsInTag = (val: string) => {
    if (!val) return "";
    console.log(val, tag);
    return tag !== "" && val === tag ? "is-selected" : "";
  };

  return (
    <section className="module module--list-card-image-text-ui">
      <div className="inner">
        <h2 className="headline">{_localizeField(title)}</h2>

        {navTags && navTags?.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-md mb-50">
            {navTags.map((item: SanityKeyedReference<Tag>, i) => (
              <li key={i}>
                <AOS delay={i / 5}>
                  <button
                    className={clsx(
                      "btn--pill text-accent ",
                      tag === item.slug?.current && "is-active",
                    )}
                    onClick={() => updateTag(item.slug?.current || "")}
                  >
                    {_localizeField(item.title)}
                  </button>
                </AOS>
              </li>
            ))}
          </ul>
        )}
        <div
          className={clsx(
            "grid gap-xl md:gap-y-xl md:gap-md",
            `grid-cols-1 md:grid-cols-${gridSize || 3}`,
            tag !== "" && "is-filtering",
          )}
        >
          {items?.map((item, i) => (
            <div
              className={clsx(
                "item",
                getIsInTag(item.tagFilter?.slug?.current || ""),
              )}
              key={i}
            >
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
    </section>
  );
};

export default ModuleListCardImageTextUI;
