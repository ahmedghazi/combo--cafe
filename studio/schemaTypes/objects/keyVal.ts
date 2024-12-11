// import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'keyVal',
  title: 'Clef Valeur ',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      type: 'localeString',
      title: 'Clef',
      description: 'Libelé',
    }),
    defineField({
      name: 'val',
      type: 'string',
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
