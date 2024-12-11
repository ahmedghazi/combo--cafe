import {defineField} from 'sanity'

export default defineField({
  name: 'coverUI',
  title: 'Cover UI',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
})
