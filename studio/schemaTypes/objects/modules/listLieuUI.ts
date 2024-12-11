import {RxViewGrid} from 'react-icons/rx'
import {baseLanguage} from '../../locale/supportedLanguages'
import {defineField} from 'sanity'

export default {
  name: 'listLieuUI',
  title: 'List Lieu UI',
  type: 'object',
  icon: RxViewGrid,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
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
      name: 'items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lieu'}]}],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.imageCover',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Lieu UI',
      }
    },
  },
}
