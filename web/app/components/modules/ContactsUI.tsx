import { ContactsUI } from "@/app/types/schema";
import portableTextComponents from "@/app/utils/portableTextComponents";
import { _localizeField } from "@/app/utils/utils";
import { PortableText } from "next-sanity";
import React from "react";
import AOS from "../ui/AOS";

type Props = {
  input: ContactsUI;
};

const ModuleContactsUI = ({ input }: Props) => {
  return (
    <section className="module module--contacts-ui">
      <div className="inner">
        <AOS>
          <h2 className="text-md md:text-xl font-secondary">
            {_localizeField(input.title)}
          </h2>
        </AOS>
        <div className="items row center-md">
          {input.items?.map((item, i) => (
            <div className="item col-md-5 col-xs-12" key={i}>
              {item && (
                <AOS delay={i + 0.1}>
                  <PortableText
                    value={_localizeField(item)}
                    components={portableTextComponents}
                  />
                </AOS>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleContactsUI;
