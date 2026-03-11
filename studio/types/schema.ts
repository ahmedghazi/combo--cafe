import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Sous menu — `array`
   *
   * basé sur les slugs (ancre) des modules
   */
  subMenu?: Array<SanityKeyed<KeyVal>>;

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Landing
 *
 *
 */
export interface Landing extends SanityDocument {
  _type: "landing";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Chapo — `localeBlockContent`
   *
   *
   */
  chapo?: LocaleBlockContent;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Nom du site — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Combo Studio Logo — `image`
   *
   *
   */
  comboStudioLogo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Message défilant top header — `string`
   *
   *
   */
  marqueeTopNav?: string;

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<
    | SanityKeyed<LinkInternal>
    | SanityKeyed<LinkExternal>
    | SanityKeyed<MenuItem>
  >;

  /**
   * Footer Dark  — `boolean`
   *
   *
   */
  footerDark?: boolean;

  /**
   * Naviguation Secondary — `array`
   *
   *
   */
  navSecondary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;

  /**
   * Combo world Logo — `image`
   *
   *
   */
  comboLogo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Infos — `localeBlockContent`
   *
   *
   */
  footerInfos?: LocaleBlockContent;

  /**
   * Message 404 — `localeBlockContent`
   *
   *
   */
  message404?: LocaleBlockContent;

  /**
   * Message Cookie — `localeBlockContent`
   *
   *
   */
  messageCookie?: LocaleBlockContent;

  /**
   * Page de mentions légales — `linkInternal`
   *
   *
   */
  legalsUrl?: LinkInternal;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   * Le nom de la page
   */
  title?: LocaleString;

  /**
   * Soustitre — `localeString`
   *
   * Visible dans les listes page, dans la card (cartouche fond noir)
   */
  subTitle?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Sous menu — `array`
   *
   * basé sur les slugs (ancre) des modules, générer le slug depuis le module, et mettre le slug dans le champs val
   */
  subMenu?: Array<SanityKeyed<KeyVal>>;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * Image clef — `figure`
   *
   * Visible dans les listes page, dans la card (1400px)
   */
  imageCover?: Figure;

  /**
   * Extrait — `localeString`
   *
   *
   */
  excerpt?: LocaleString;

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Lieu
 *
 *
 */
export interface Lieu extends SanityDocument {
  _type: "lieu";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Soustitre — `string`
   *
   *
   */
  subTitle?: string;

  /**
   * Image clef — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
}

/**
 * Studio
 *
 *
 */
export interface Studio extends SanityDocument {
  _type: "studio";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click on generate, Semantic URL based on title (no space no char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Soustitre — `string`
   *
   *
   */
  subTitle?: string;

  /**
   * Lieu — `string`
   *
   * Aubervilliers, Colombes, ...
   */
  location?: string;

  /**
   * Image clef — `figure`
   *
   * Visible on liste pages, project cards (1400px)
   */
  imageCover?: Figure;

  /**
   * Image Hero — `figure`
   *
   * Visible on detail page (2000px), if no Slider Hero
   */
  imageHero?: Figure;

  /**
   * Slider Hero — `array`
   *
   * Visible on detail page (2000px), if no Image Hero
   */
  SliderHero?: Array<SanityKeyed<Figure>>;

  /**
   * Extrait — `localeString`
   *
   *
   */
  excerpt?: LocaleString;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * infos — `array`
   *
   *
   */
  infos?: Array<SanityKeyed<SummaryDetail>>;
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };
}

export type LocaleString = {
  _type: "localeString";
  /**
   * Français — `string`
   *
   *
   */
  fr?: string;

  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type LocaleText = {
  _type: "localeText";
  /**
   * Français — `text`
   *
   *
   */
  fr?: string;

  /**
   * English — `text`
   *
   *
   */
  en?: string;
};

export type LocaleBlockContent = {
  _type: "localeBlockContent";
  /**
   * Français — `blockContent`
   *
   *
   */
  fr?: BlockContent;

  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<KeyValGroup>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<Embed>
>;

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<PageModulaire | Home | Studio>;

  /**
   * cta — `boolean`
   *
   * Look Bouton avec outline
   */
  cta?: boolean;
};

export type LinkModal = {
  _type: "linkModal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * target — `string`
   *
   *
   */
  target?: "modal-works";
};

export type LinkAnchor = {
  _type: "linkAnchor";
  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * target — `string`
   *
   * html anchor id
   */
  target?: string;
};

export type MenuItem = {
  _type: "menuItem";
  /**
   * link — `linkInternal`
   *
   *
   */
  link?: LinkInternal;

  /**
   * Sub menu — `array`
   *
   *
   */
  subMenu?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Embed = {
  _type: "embed";
  /**
   * url — `url`
   *
   * for youtube, vimeo ex: https://www.youtube.com/watch?v=exTZ9vB6ZeE
   */
  url?: string;

  /**
   * iframe — `text`
   *
   *
   */
  iframe?: string;
};

export type KeyVal = {
  _type: "keyVal";
  /**
   * Clef — `localeString`
   *
   * Libelé
   */
  key?: LocaleString;

  /**
   * Valeur — `string`
   *
   *
   */
  val?: string;
};

export type KeyValText = {
  _type: "keyValText";
  /**
   * Clef — `localeString`
   *
   *
   */
  key?: LocaleString;

  /**
   * Valeur — `localeBlockContent`
   *
   *
   */
  val?: LocaleBlockContent;
};

export type KeyValSimple = {
  _type: "keyValSimple";
  /**
   * Clef — `localeString`
   *
   *
   */
  key?: LocaleString;

  /**
   * Valeur — `localeString`
   *
   *
   */
  val?: LocaleString;
};

export type KeyValGroup = {
  _type: "keyValGroup";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<KeyValSimple> | SanityKeyed<KeyValText>>;
};

export type Video = {
  _type: "video";
  /**
   * url — `url`
   *
   *
   */
  url?: string;

  /**
   * placeholder — `image`
   *
   *
   */
  placeholder?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Figure = {
  _type: "figure";
  /**
   * Image — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type CardImageText = {
  _type: "cardImageText";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Tag — `localeString`
   *
   *
   */
  tag?: LocaleString;

  /**
   * Tag Filter — `reference`
   *
   * Pour créer la nav filter sur la grille de Card Image Text
   */
  tagFilter?: SanityReference<Tag>;

  /**
   * text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type SummaryDetail = {
  _type: "summaryDetail";
  /**
   * Libellé — `localeString`
   *
   *
   */
  summary?: LocaleString;

  /**
   * detail — `localeBlockContent`
   *
   *
   */
  detail?: LocaleBlockContent;
};

export type TextUI = {
  _type: "textUI";
  /**
   * look — `string`
   *
   *
   */
  look?: "default" | "columns" | "offset";

  /**
   * title — `localeString`
   *
   * Module title (displayed only in the admin)
   */
  title?: LocaleString;

  /**
   * titleCentered — `boolean`
   *
   * Titre centré?
   */
  titleCentered?: boolean;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type TextsUI = {
  _type: "textsUI";
  /**
   * look — `string`
   *
   *
   */
  look?: "default" | "offset";

  /**
   * title — `localeString`
   *
   * Module titre (visible uniquement dans l'admin)
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<LocaleBlockContent>>;

  /**
   * titleCentered — `boolean`
   *
   * Titre centré?
   */
  titleCentered?: boolean;

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type ImageUI = {
  _type: "imageUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type ImagesUI = {
  _type: "imagesUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;
};

export type HeroUI = {
  _type: "heroUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type LogosUI = {
  _type: "logosUI";
  /**
   * title — `localeString`
   *
   * Module title (displayed only in the admin)
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Figure>>;

  /**
   * backgroundColor — `string`
   *
   * Couleur de fond
   */
  backgroundColor?: string;

  /**
   * foregroundColor — `string`
   *
   * Couleur de texte
   */
  foregroundColor?: string;
};

export type ContactsUI = {
  _type: "contactsUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<LocaleBlockContent>>;
};

export type ListCardImageTextUI = {
  _type: "listCardImageTextUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<CardImageText>>;

  /**
   * navTags — `array`
   *
   *
   */
  navTags?: Array<SanityKeyedReference<Tag>>;
};

export type ListLieuUI = {
  _type: "listLieuUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Lieu>>;
};

export type ListStudioUI = {
  _type: "listStudioUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Studio>>;
};

export type ListLModulaireUI = {
  _type: "listLModulaireUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<TextsUI>
    | SanityKeyed<TextImageUI>
    | SanityKeyed<HeroUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<ImagesUI>
    | SanityKeyed<LogosUI>
    | SanityKeyed<ContactsUI>
    | SanityKeyed<ListCardImageTextUI>
    | SanityKeyed<ListLieuUI>
    | SanityKeyed<ListStudioUI>
    | SanityKeyed<ListLModulaireUI>
    | SanityKeyed<ListPageUI>
    | SanityKeyed<MarqueeUI>
    | SanityKeyed<SplitImageTextUI>
    | SanityKeyed<CallOutUI>
    | SanityKeyed<HeroSplitScrollUI>
    | SanityKeyed<HeroSplitUI>
    | SanityKeyed<SliderCardImageTextUI>
  >;
};

export type ListPageUI = {
  _type: "listPageUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * navTags — `array`
   *
   *
   */
  navTags?: Array<SanityKeyedReference<Tag>>;

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<PageModulaire>>;
};

export type MarqueeUI = {
  _type: "marqueeUI";
  /**
   * text — `string`
   *
   *
   */
  text?: string;

  /**
   * foregroundColor — `string`
   *
   * format hex : #123321
   */
  foregroundColor?: string;

  /**
   * backgroundColor — `string`
   *
   * format hex : #123321
   */
  backgroundColor?: string;
};

export type SplitImageTextUI = {
  _type: "splitImageTextUI";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * title — `localeString`
   *
   * Module title
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;
};

export type SliderUI = {
  _type: "sliderUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
};

export type CallOutUI = {
  _type: "callOutUI";
  /**
   * title — `localeText`
   *
   * Module title
   */
  title?: LocaleText;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * backgroundImage — `image`
   *
   * Image de fond
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkExternal>>;
};

export type HeroSplitScrollUI = {
  _type: "heroSplitScrollUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * itemsLeft — `array`
   *
   *
   */
  itemsLeft?: Array<SanityKeyed<Figure>>;

  /**
   * itemsRight — `array`
   *
   *
   */
  itemsRight?: Array<SanityKeyed<Figure>>;
};

export type HeroSplitUI = {
  _type: "heroSplitUI";
  /**
   * title — `string`
   *
   * Module title (displayed only in the admin)
   */
  title?: string;

  /**
   * itemsLeft — `figure`
   *
   *
   */
  itemsLeft?: Figure;

  /**
   * itemsRight — `figure`
   *
   *
   */
  itemsRight?: Figure;
};

export type TextImageUI = {
  _type: "textImageUI";
  /**
   * title — `localeString`
   *
   * Module title (displayed only in the admin)
   */
  title?: LocaleString;

  /**
   * direction — `string`
   *
   * Image à gauche ou inverse
   */
  direction?: "" | "reverse";

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * image — `figure`
   *
   *
   */
  image?: Figure;
};

export type SliderCardImageTextUI = {
  _type: "sliderCardImageTextUI";
  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section
   */
  slug?: { _type: "slug"; current: string };

  /**
   * gridSize — `number`
   *
   * Items par ligne, par défaut 3
   */
  gridSize?: number;

  /**
   * autoplay — `boolean`
   *
   *
   */
  autoplay?: boolean;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<CardImageText>>;
};

export type Documents =
  | Home
  | Landing
  | Infos
  | Settings
  | PageModulaire
  | Lieu
  | Studio
  | Tag;
