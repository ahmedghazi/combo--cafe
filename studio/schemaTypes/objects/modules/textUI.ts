import {defineField} from 'sanity'
import {FiAlignLeft} from 'react-icons/fi'
import {baseLanguage} from '../../locale/supportedLanguages'

export default defineField({
  name: 'textUI',
  title: 'Text UI',
  type: 'object',
  icon: FiAlignLeft,
  fields: [
    defineField({
      name: 'look',
      type: 'string',
      description: '',
      options: {
        list: [
          {title: 'Defaut', value: 'default'},
          {title: '2 colonnes', value: 'columns'},
          {title: 'Offset', value: 'offset'},
        ], // <-- predefined values
      },
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'titleCentered',
      type: 'boolean',
      description: 'Titre centré?',
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
      title: 'Text',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      description: 'Image de fond',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      description: 'Couleur de fond',
    }),
    defineField({
      name: 'foregroundColor',
      type: 'string',
      description: 'Couleur de texte',
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
        subtitle: 'Text UI',
      }
    },
  },
})
