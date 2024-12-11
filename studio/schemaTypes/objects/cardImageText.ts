import {BsInfoSquare} from 'react-icons/bs'
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'cardImageText',
  title: 'Card Image Text',
  type: 'object',
  icon: BsInfoSquare,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'title',
    }),
    defineField({
      name: 'tag',
      type: 'localeString',
      title: 'Tag',
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
      title: 'text',
    }),
    defineField({
      name: 'image',
      type: 'figure',
      title: 'image',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'image.image',
    },
    // prepare(selection) {
    //   const {title} = selection
    //   return {
    //     title: title,
    //     subtitle: 'Inter Titre avec index',
    //   }
    // },
  },
})
