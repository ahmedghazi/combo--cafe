import {defineField} from 'sanity'
import {FiImage} from 'react-icons/fi'

export default defineField({
  name: 'heroSplitUI',
  title: 'Hero Split UI',
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
      type: 'figure',
      // of: [{type: 'figure'}],
    }),
    // defineField({
    //   name: 'titleRight',
    //   type: 'localeString',
    //   description: '',
    // }),
    defineField({
      name: 'itemsRight',
      type: 'figure',
      // of: [{type: 'figure'}],
    }),
  ],

  preview: {
    select: {
      image: 'itemsLeft.image',
      title: 'title',
    },
    prepare(selection) {
      const {title, image} = selection
      return {
        title: title,
        subtitle: 'Hero Split UI',
        media: image,
      }
    },
  },
})
