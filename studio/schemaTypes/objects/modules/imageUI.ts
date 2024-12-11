import {defineField} from 'sanity'
import {FiImage} from 'react-icons/fi'

export default defineField({
  name: 'imageUI',
  title: 'Image UI',
  type: 'object',
  icon: FiImage,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'image',
      type: 'figure',
    }),
  ],

  preview: {
    select: {
      media: 'image.image',
      title: 'title',
    },
    // prepare(selection) {
    //   const {title, image} = selection
    //   return {
    //     title: title,
    //     subtitle: 'Image',
    //     media: image,
    //   }
    // },
  },
})
