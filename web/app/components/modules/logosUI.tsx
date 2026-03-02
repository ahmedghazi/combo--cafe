import React from "react";
import clsx from "clsx";
import { LogosUI } from "@/app/types/schema";
import Figure from "../ui/Figure";
import AOS from "../ui/AOS";
import { _localizeField } from "@/app/sanity-api/utils";

type Props = {
  input: LogosUI;
};

const ModulelogosUI = ({ input }: Props) => {
  // console.log(input);
  const { title, items, backgroundColor, foregroundColor } = input;
  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
  } as React.CSSProperties;
  return (
    <section className={clsx("module module--logos-ui")}>
      <div className={clsx("inner")} style={style}>
        {title && (
          <AOS>
            <div className={"text-center"}>
              <h2 className={clsx("headline")}>{_localizeField(title)}</h2>
            </div>
          </AOS>
        )}
        <div className={clsx("flex justify-center gap-lg")}>
          {items?.map((item, index) => (
            <div key={index} className="item">
              <AOS delay={index / 5}>
                <Figure asset={item.image?.asset} width={1000} />
                <figcaption className="py-2">{item.caption}</figcaption>
              </AOS>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulelogosUI;
