import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {TfiLayoutMediaRight} from 'react-icons/tfi'

export default defineField({
  name: 'splitImageTextUI',
  title: 'Split Image Text UI',
  type: 'object',
  icon: TfiLayoutMediaRight,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'title',
      type: 'localeString',
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
      name: 'text',
      type: 'localeBlockContent',
      title: 'Text',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Split Image Text UI',
      }
    },
  },
})
