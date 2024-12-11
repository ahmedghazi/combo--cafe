// import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'keyValText',
  title: 'Clef Valeur avec Texte editeur',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      type: 'localeString',
      title: 'Clef',
    }),
    defineField({
      name: 'val',
      type: 'localeBlockContent',
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
        subtitle: 'Clef Valeur avec Texte editeur',
      }
    },
  },
})
