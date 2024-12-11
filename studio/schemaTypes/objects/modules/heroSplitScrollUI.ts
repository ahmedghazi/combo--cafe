import {defineField} from 'sanity'
import {FiImage} from 'react-icons/fi'

export default defineField({
  name: 'heroSplitScrollUI',
  title: 'Hero Split Scroll UI',
  type: 'object',
  icon: FiImage,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    // defineField({
    //   name: 'titleLeft',
    //   type: 'localeString',
    //   description: '',
    // }),
    defineField({
      name: 'itemsLeft',
      type: 'array',
      of: [{type: 'figure'}],
    }),
    // defineField({
    //   name: 'titleRight',
    //   type: 'localeString',
    //   description: '',
    // }),
    defineField({
      name: 'itemsRight',
      type: 'array',
      of: [{type: 'figure'}],
    }),
  ],

  preview: {
    select: {
      image: 'titleLeft.0',
      title: 'title',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Hero Split Scroll UI',
        media: image,
      }
    },
  },
})
