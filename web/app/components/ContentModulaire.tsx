import React from "react";
import Modules from "./modules";
import { ModulesList } from "../types/extra-types";

const ContentModulaire = ({ modules }: ModulesList) => {
  return (
    <div className="content content--modulaire">
      {modules && <Modules modules={modules} />}
    </div>
  );
};

export default ContentModulaire;
