import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineField({
  name: 'moduleProjects',
  title: 'Projets',
  type: 'object',
  icon: ThListIcon,
  initialValue: {
    layout: 'mosaic',
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Mosaic', value: 'mosaic'},
          {title: 'Index', value: 'index'},
        ], // <-- predefined values
        // layout: 'radio', // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
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
        subtitle: 'Projets',
      }
    },
  },
})
