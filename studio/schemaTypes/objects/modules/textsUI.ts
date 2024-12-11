import {defineField} from 'sanity'
import {PiTextColumnsLight} from 'react-icons/pi'

export default defineField({
  name: 'moduleTexts',
  title: 'Textes',
  type: 'object',
  icon: PiTextColumnsLight,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: "Module titre (visible uniquement dans l'admin)",
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'localeBlockContent'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Textes',
      }
    },
  },
})
