import { ListLModulaireUI } from "@/app/types/schema";
import React from "react";
import SummaryDetailFramer from "../ui/SummaryDetailFramer";
import ContentModulaire from "../ContentModulaire";
import { _localizeField } from "@/app/sanity-api/utils";

type Props = {
  input: ListLModulaireUI;
};

const ModuleListLModulaireUI = ({ input }: Props) => {
  return (
    <section className='module module--list-modulaire-ui'>
      <SummaryDetailFramer
        summary={<h2 className='headline'>{_localizeField(input.title)}</h2>}
        detail={
          <>{input.items && <ContentModulaire modules={input.items} />}</>
        }></SummaryDetailFramer>
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
    </section>
  );
};

export default ModuleListLModulaireUI;
