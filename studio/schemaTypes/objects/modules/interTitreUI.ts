import {defineField} from 'sanity'
import {PiTextAaBold} from 'react-icons/pi'
import {baseLanguage} from '../../locale/supportedLanguages'

export default defineField({
  name: 'moduleInterTitre',
  title: 'Intertitre',
  type: 'object',
  icon: PiTextAaBold,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Intertitre',
      }
    },
  },
})
