"use client";
import "./index.scss";
import React from "react";
import ModuleHeroUI from "./HeroUI";
import ModuleTextUI from "./TextUI";
import ModuleContactsUI from "./ContactsUI";
import ModuleListCardImageTextUI from "./ListCardImageTextUI";
import ModuleListLieuUI from "./ListLieuUI";
import ModuleListStudioUI from "./ListStudioUI";
import ModuleListLModulaireUI from "./ListLModulaireUI";
import ModuleImageUI from "./ImageUI";
import ModuleMarqueeUI from "./MarqueeUI";
import ModuleSliderUI from "./SliderUI";
import ModuleCallOutUI from "./CallOutUI";
import ModuleSplitImageTextUI from "./SplitImageTextUI";
import ModuleHeroSplitScrollUI from "./HeroSplitScrollUI";
import ModuleHeroSplitUI from "./HeroSplitUI";
import ModuleTextImageUI from "./TextImageUI";
import ModuleListPageUI from "./ListPageUI";
import ModuleSliderCardImageTextUI from "./SliderCardImageTextUI";
import ModuleTextsUI from "./TextsUI";
import ModuleImagesUI from "./ImagesUI";
import ModulelogosUI from "./logosUI";
import { ModulesList } from "@/app/types/extra-types";

const Modules = ({ modules }: ModulesList) => {
  // console.log(modules);
  const _renderModules = () => {
    const _modules = modules.map((module: ModulesList["modules"][number]) => {
      console.log(module._type);
      switch (module._type) {
        case "textUI":
          return <ModuleTextUI key={module._key} input={module} />;
        case "textsUI":
          return <ModuleTextsUI key={module._key} input={module} />;
        case "textImageUI":
          return <ModuleTextImageUI key={module._key} input={module} />;
        case "heroUI":
          return <ModuleHeroUI key={module._key} input={module} />;
        case "imagesUI":
          return <ModuleImagesUI key={module._key} input={module} />;
        case "logosUI":
          return <ModulelogosUI key={module._key} input={module} />;
        case "contactsUI":
          return <ModuleContactsUI key={module._key} input={module} />;
        case "listCardImageTextUI":
          return <ModuleListCardImageTextUI key={module._key} input={module} />;
        case "listLieuUI":
          return <ModuleListLieuUI key={module._key} input={module} />;
        case "listStudioUI":
          return <ModuleListStudioUI key={module._key} input={module} />;
        case "listLModulaireUI":
          return <ModuleListLModulaireUI key={module._key} input={module} />;
        case "listPageUI":
          return <ModuleListPageUI key={module._key} input={module} />;
        case "imageUI":
          return <ModuleImageUI key={module._key} input={module} />;
        case "marqueeUI":
          return <ModuleMarqueeUI key={module._key} input={module} />;
        case "splitImageTextUI":
          return <ModuleSplitImageTextUI key={module._key} input={module} />;
        case "sliderUI":
          return <ModuleSliderUI key={module._key} input={module} />;
        case "callOutUI":
          return <ModuleCallOutUI key={module._key} input={module} />;
        case "heroSplitScrollUI":
          return <ModuleHeroSplitScrollUI key={module._key} input={module} />;
        case "heroSplitUI":
          return <ModuleHeroSplitUI key={module._key} input={module} />;
        case "sliderCardImageTextUI":
          return (
            <ModuleSliderCardImageTextUI key={module._key} input={module} />
          );
        default:
          return null;
      }
    });
    return _modules;
  };

  return <div className="modules">{_renderModules()}</div>;
};

export default Modules;
