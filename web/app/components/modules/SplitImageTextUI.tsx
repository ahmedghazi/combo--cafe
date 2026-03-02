import { SplitImageTextUI } from "@/app/types/schema";
import { PortableText } from "next-sanity";
import React from "react";
import AOS from "../ui/AOS";
import { _localizeField } from "@/app/sanity-api/utils";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";

type Props = {
  input: SplitImageTextUI;
};

const ModuleSplitImageTextUI = ({ input }: Props) => {
  // console.log(input);
  return (
    <section
      className='module module--split-image-text-ui'
      id={input.slug?.current}>
      <div
        className=''
        style={{
          backgroundImage: `url(${input.image?.asset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 '>
            <div className='bg'></div>
            <div className='panel'>
              <AOS>
                <h2 className='headline'>{_localizeField(input.title)}</h2>
              </AOS>
              <AOS delay={0.2}>
                <div className='text'>
                  <PortableText
                    value={_localizeField(input.text)}
                    components={portableTextComponents}
                  />
                </div>
              </AOS>
            </div>
          </div>
          <div className='md:w-1/2 aspect-square md:aspect-auto hidden-sm'></div>
        </div>
      </div>
    </section>
  );
};

export default ModuleSplitImageTextUI;
