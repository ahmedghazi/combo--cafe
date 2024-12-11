import {RxViewGrid} from 'react-icons/rx'
import {baseLanguage} from '../../locale/supportedLanguages'
import {defineField} from 'sanity'

export default {
  name: 'listPageUI',
  title: 'list Page UI',
  type: 'object',
  icon: RxViewGrid,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    }),
    defineField({
      name: 'navTags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
    defineField({
      name: 'gridSize',
      type: 'number',
      initialValue: 3,
      description: 'Items par ligne, par défaut 3',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'pageModulaire'}]}],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.imageCover.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Page UI',
      }
    },
  },
}
