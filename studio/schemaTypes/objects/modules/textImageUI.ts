import {defineField} from 'sanity'
import {BsFileRichtext} from 'react-icons/bs'
import {baseLanguage} from '../../locale/supportedLanguages'

export default defineField({
  name: 'textImageUI',
  title: 'Text Image UI',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'direction',
      type: 'string',
      description: 'Image à gauche ou inverse',
      initialValue: 'row',
      options: {
        list: [
          {title: 'Defaut', value: ''},
          {title: 'Droite > Gauche', value: 'reverse'},
        ],
      },
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
      title: 'Text',
    }),
    defineField({
      name: 'image',
      type: 'figure',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      image: 'image.image',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Text image',
        media: image,
      }
    },
  },
})
