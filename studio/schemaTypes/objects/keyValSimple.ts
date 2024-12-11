// import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'keyValSimple',
  title: 'Clef Valeur simple',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      type: 'localeString',
      title: 'Clef',
    }),
    defineField({
      name: 'val',
      type: 'localeString',
      title: 'Valeur',
    }),
  ],
  preview: {
    select: {
      title: `key.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Clef Valeur simple',
      }
    },
  },
})
