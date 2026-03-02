import {defineField} from 'sanity'
import {PiTextColumnsLight} from 'react-icons/pi'
import {baseLanguage} from '../../locale/supportedLanguages'

export default defineField({
  name: 'textsUI',
  title: 'Textes',
  type: 'object',
  icon: PiTextColumnsLight,
  initialValue: {
    look: 'default',
  },
  fields: [
    defineField({
      name: 'look',
      type: 'string',
      description: '',
      options: {
        list: [
          {title: 'Defaut', value: 'default'},
          // {title: '2 colonnes', value: 'columns'},
          {title: 'Offset', value: 'offset'},
        ], // <-- predefined values
      },
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      description: "Module titre (visible uniquement dans l'admin)",
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'localeBlockContent'}],
    }),
    defineField({
      name: 'titleCentered',
      type: 'boolean',
      description: 'Titre centré?',
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
      items: 'items',
      look: 'look',
    },
    prepare(selection) {
      const {title, items, look} = selection
      return {
        title: title,
        subtitle: `Texts UI (${items?.length || 0} items) - ${look || 'default'}`,
      }
    },
  },
})
