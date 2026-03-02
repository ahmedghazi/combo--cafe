import { ListLieuUI } from "@/app/types/schema";
import React from "react";
import SummaryDetailFramer from "../ui/SummaryDetailFramer";
import { _localizeField } from "@/app/sanity-api/utils";
import ContentModulaire from "../ContentModulaire";
import AOS from "../ui/AOS";

type Props = {
  input: ListLieuUI;
};

const ModuleListLieuUI = ({ input }: Props) => {
  return (
    <section className='module module--list-lieu-ui' id={input.slug?.current}>
      {input.items?.map((item, i) => (
        <div className='lieu' key={i}>
          <SummaryDetailFramer
            summary={
              <h2 className='headline'>
                <AOS>{_localizeField(item.title)}</AOS>
              </h2>
            }
            detail={
              <>{item.modules && <ContentModulaire modules={item.modules} />}</>
            }></SummaryDetailFramer>
        </div>
      ))}
      {/* <pre>{JSON.stringify(input.items, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListLieuUI;
