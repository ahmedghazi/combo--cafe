import home from './singletons/home'
import landing from './singletons/landing'
import pageModulaire from './documents/pageModulaire'
import lieu from './documents/lieu'
import studio from './documents/studio'
import infos from './singletons/infos'
import settings from './singletons/settings'
import tag from './documents/tag'

import localeString from './locale/localeString'
import localeText from './locale/localeText'
import localeBlockContent from './locale/localeBlockContent'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import linkModal from './objects/linkModal'
import linkanchor from './objects/linkanchor'
import menuItem from './objects/menuItem'
// import tagGroup from './objects/tagGroup'
import seo from './objects/seo'
import embed from './objects/embed'
import keyVal from './objects/keyVal'
import keyValGroup from './objects/keyValGroup'
import keyValText from './objects/keyValText'
import keyValSimple from './objects/keyValSimple'
import video from './objects/video'
import figure from './objects/figure'
import cardImageText from './objects/cardImageText'
import summaryDetail from './objects/summaryDetail'

import heroUI from './objects/modules/heroUI'
import textUI from './objects/modules/textUI'
import contactsUI from './objects/modules/contactsUI'
import listCardImageTextUI from './objects/modules/listCardImageTextUI'
import imageUI from './objects/modules/imageUI'
import marqueeUI from './objects/modules/marqueeUI'
import splitImageTextUI from './objects/modules/splitImageTextUI'
import sliderUI from './objects/modules/sliderUI'
import calloutUI from './objects/modules/calloutUI'
import listLieuUI from './objects/modules/listLieuUI'
import listStudioUI from './objects/modules/listStudioUI'
import listLModulaireUI from './objects/modules/listLModulaireUI'
import heroSplitScrollUI from './objects/modules/heroSplitScrollUI'
import heroSplitUI from './objects/modules/heroSplitUI'
import textImageUI from './objects/modules/textImageUI'
import listPageUI from './objects/modules/listPageUI'
import sliderCardImageTextUI from './objects/modules/sliderCardImageTextUI'

export const schemaTypes = [
  home,
  landing,
  infos,
  settings,
  pageModulaire,
  lieu,
  studio,
  tag,

  localeString,
  localeText,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  linkModal,
  linkanchor,
  menuItem,
  seo,
  embed,
  keyVal,
  keyValText,
  keyValSimple,
  keyValGroup,
  video,
  // interTitre,
  figure,
  cardImageText,
  summaryDetail,

  textUI,
  imageUI,
  heroUI,
  contactsUI,
  listCardImageTextUI,
  listLieuUI,
  listStudioUI,
  listLModulaireUI,
  listPageUI,
  marqueeUI,
  splitImageTextUI,
  sliderUI,
  calloutUI,
  heroSplitScrollUI,
  heroSplitUI,
  textImageUI,
  sliderCardImageTextUI,
]
export default schemaTypes
