import React from "react";
import clsx from "clsx";
import { ImagesUI } from "@/app/types/schema";
import Figure from "../ui/Figure";
import AOS from "../ui/AOS";
// import PreJson from "../ui/PreJson";
// import portableTextComponents from "@/app/sanity-api/portableTextComponents";
// import { PortableText } from "@portabletext/react";

type Props = {
  input: ImagesUI;
};

const ModuleImagesUI = ({ input }: Props) => {
  // console.log(input);
  const { items } = input;

  return (
    <section className={clsx("module module--images-ui")}>
      <div className={clsx("grid", `md:grid-cols-${items?.length || 1}`)}>
        {items?.map((item, index) => (
          <div key={index} className={clsx("item", `item-${index}`)}>
            <AOS delay={index / 5}>
              <Figure asset={item.image?.asset} width={1000} />
              <figcaption className='py-2'>{item.caption}</figcaption>
            </AOS>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModuleImagesUI;
