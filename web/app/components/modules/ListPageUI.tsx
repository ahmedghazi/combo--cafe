import React, { useMemo, useState } from "react";
import { ListPageUI, SanityKeyedReference, Tag } from "@/app/types/schema";
import clsx from "clsx";
import CardPage from "../ui/CardPage";
import { _localizeField } from "@/app/sanity-api/utils";

type Props = {
  input: ListPageUI;
};

const ModuleListPageUI = ({ input }: Props) => {
  const { title, gridSize, items, navTags } = input;
  const [tag, setTag] = useState<string>("");

  const updateTag = (val: string) => {
    if (!val) return;
    setTag(val === tag ? "" : val);
  };

  const getIsInTag = (val: SanityKeyedReference<Tag>[] | undefined) => {
    if (!val) return "";
    const tagsSlug = val.map((el) => el.slug?.current);
    return tag !== "" && tagsSlug.includes(tag) ? "is-selected" : "";
  };
  return (
    <section className='module module--list-page-ui'>
      <div className='inner'>
        <h2 className='headline'>{_localizeField(title)}</h2>
        {/* <pre>{JSON.stringify(navTags, null, 2)}</pre> */}
        {navTags && navTags?.length > 0 && (
          <ul className='flex flex-wrap justify-center gap-md mb-50'>
            {navTags.map((item, i) => (
              <li key={i}>
                <button
                  className={clsx(
                    "btn--pill text-accent",
                    tag === item.slug?.current && "is-active",
                  )}
                  onClick={() => updateTag(item.slug?.current || "")}>
                  {_localizeField(item.title)}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div
          className={clsx(
            "grid gap-xl md:gap-y-xl md:gap-md",
            `md:grid-cols-${gridSize || 3}`,
            tag !== "" && "is-filtering",
          )}>
          {items?.map((item, i) => (
            <div className={clsx("item", getIsInTag(item.tags))} key={i}>
              <CardPage input={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleListPageUI;
