"use client";
import React from "react";
import dynamic from "next/dynamic";
// const ModuleTextUI = dynamic(() => import("./TextUI"), { ssr: false });
// const ModuleHeroUI = dynamic(() => import("./HeroUI"), { ssr: false });
// const ModuleContactsUI = dynamic(() => import("./ContactsUI"), {
//   ssr: false,
// });
import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  ImageUI,
  ListCardImageTextUI,
  ListLieuUI,
  ListLModulaireUI,
  ListPageUI,
  ListStudioUI,
  MarqueeUI,
  SanityKeyed,
  SliderCardImageTextUI,
  SliderUI,
  SplitImageTextUI,
  TextImageUI,
  TextUI,
} from "../../types/schema";

import "./index.scss";
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

type Props = {
  input: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
};

const Modules = ({ input }: Props) => {
  // console.log(input);
  const _renderModules = () => {
    const _modules = input.map(
      (
        module:
          | SanityKeyed<TextUI>
          | SanityKeyed<TextImageUI>
          | SanityKeyed<HeroUI>
          | SanityKeyed<ContactsUI>
          | SanityKeyed<ListCardImageTextUI>
          | SanityKeyed<ListLieuUI>
          | SanityKeyed<ListStudioUI>
          | SanityKeyed<ListLModulaireUI>
          | SanityKeyed<ListPageUI>
          | SanityKeyed<ImageUI>
          | SanityKeyed<MarqueeUI>
          | SanityKeyed<SplitImageTextUI>
          | SanityKeyed<CallOutUI>
          | SanityKeyed<HeroSplitScrollUI>
          | SanityKeyed<HeroSplitUI>
          | SanityKeyed<SliderCardImageTextUI>,
        i: number
      ) => {
        // console.log(module._type);
        switch (module._type) {
          case "textUI":
            return <ModuleTextUI key={module._key} input={module} />;
          case "heroUI":
            return <ModuleHeroUI key={module._key} input={module} />;
          case "contactsUI":
            return <ModuleContactsUI key={module._key} input={module} />;
          case "listCardImageTextUI":
            return (
              <ModuleListCardImageTextUI key={module._key} input={module} />
            );
          case "listLieuUI":
            return <ModuleListLieuUI key={module._key} input={module} />;
          case "listStudioUI":
            return <ModuleListStudioUI key={module._key} input={module} />;
          case "listLModulaireUI":
            return <ModuleListLModulaireUI key={module._key} input={module} />;
          case "imageUI":
            return <ModuleImageUI key={module._key} input={module} />;
          case "marqueeUI":
            return <ModuleMarqueeUI key={module._key} input={module} />;
          case "splitImageTextUI":
            return <ModuleSplitImageTextUI key={module._key} input={module} />;
          // case "sliderUI":
          //   return <ModuleSliderUI key={module._key} input={module} />;
          case "callOutUI":
            return <ModuleCallOutUI key={module._key} input={module} />;
          case "heroSplitScrollUI":
            return <ModuleHeroSplitScrollUI key={module._key} input={module} />;
          case "heroSplitUI":
            return <ModuleHeroSplitUI key={module._key} input={module} />;
          default:
            return null;
        }
      }
    );
    return _modules;
  };

  return <div className='modules'>{_renderModules()}</div>;
};

export default Modules;
