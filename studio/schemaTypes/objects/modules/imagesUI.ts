import {defineField} from 'sanity'
import {BsLayoutThreeColumns} from 'react-icons/bs'

export default defineField({
  name: 'imagesUI',
  title: 'Image(s)',
  type: 'object',
  icon: BsLayoutThreeColumns,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      return {
        title: title,
        subtitle: `Image(s) UI ${items.length} items`,
        media: items?.[0].image,
      }
    },
  },
})
