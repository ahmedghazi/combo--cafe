import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {IoCallOutline} from 'react-icons/io5'

export default defineField({
  name: 'callOutUI',
  title: 'Call Out UI',
  type: 'object',
  icon: IoCallOutline,
  fields: [
    defineField({
      name: 'title',
      type: 'localeText',
      description: 'Module title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section',
      // readOnly: true,
      options: {
        source: (doc, context) => {
          console.log({doc})
          console.log({context})
          return context.parent ? context.parent.title.fr : 'title'
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      description: 'Image de fond',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'linkExternal',
        },
      ],
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
        subtitle: 'Call Out UI',
      }
    },
  },
})
