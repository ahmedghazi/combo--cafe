import React from "react";
import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  ImageUI,
  Landing,
  ListCardImageTextUI,
  ListLieuUI,
  ListLModulaireUI,
  ListPageUI,
  ListStudioUI,
  MarqueeUI,
  SliderCardImageTextUI,
  SliderUI,
  SplitImageTextUI,
  TextImageUI,
  TextUI,
} from "../types/schema";
import Modules from "./modules";
import { SanityKeyed } from "sanity-codegen";

/*
  modules?: Array<
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
*/
type Props = {
  modules: Array<
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

const ContentModulaire = ({ modules }: Props) => {
  return (
    <div className='content content--modulaire'>
      {modules && <Modules input={modules} />}
    </div>
  );
};

export default ContentModulaire;
