// import {BiDockTop, BiDockBottom} from 'react-icons/bi'
// import {ControlsIcon} from '@sanity/icons'
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import {SEOPane} from 'sanity-plugin-seo-pane'
import {resolveProductionUrl} from './actions/resolveProductionUrl'
import SeoPreview from './previews/seo/index'
const remoteURL = 'https://buildingbooks.gtsb.io'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL + '' : remoteURL + ''

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'home',
    'landing',
    'media.tag',
    'pageModulaire',
    'lieu',
    'studio',
    'tag',
    // 'project',
    'settings',
    'infos',
  ].includes(id)
}

export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Réglages (header, footer, ...)')
        .schemaType('settings')
        .child(
          S.editor()
            .title('Réglages (header, footer, ...)')
            .schemaType('settings')
            .documentId('settings'),
        ),
      S.divider(),

      S.listItem()
        .title('Landing')
        .schemaType('landing')
        .child(S.editor().title('landing').schemaType('landing').documentId('landing')),

      S.listItem()
        .title('Accueil')
        .schemaType('home')
        .child(S.editor().title('Home').schemaType('home').documentId('home')),

      // S.listItem()
      //   .title('Infos')
      //   .schemaType('infos')
      //   .child(S.editor().title('Manifesto').schemaType('infos').documentId('infos')),
      S.divider(),

      S.listItem()
        .title('Pages')
        .schemaType('pageModulaire')
        .child(S.documentTypeList('pageModulaire')),
      S.listItem().title('Tags').schemaType('tag').child(S.documentTypeList('tag')),

      S.divider(),

      S.listItem().title('Lieux').schemaType('lieu').child(S.documentTypeList('lieu')),
      S.divider(),

      S.listItem().title('Studios').schemaType('studio').child(S.documentTypeList('studio')),
      S.divider(),

      // S.divider(),

      // S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project')),

      // S.divider(),

      /**
       * with seo preview
       */

      // S.listItem()
      //   .title('Projets liste')
      //   .schemaType('project')
      //   .child(
      //     S.documentTypeList('project').child((id) =>
      //       S.document().schemaType('project').documentId(id).views([
      //         // The default form for editing a document
      //         S.view.form(),

      //         // Render the current selected document’s values as JSON
      //         // S.view.component(SeoPreview).title('Seo preview').options({previewURL}),
      //       ]),
      //     ),
      //   ),

      // S.listItem().title('Tags').schemaType('tag').child(S.documentTypeList('tag')),
      // S.divider(),

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
