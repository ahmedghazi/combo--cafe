import {defineField} from 'sanity'
import {TbArrowNarrowRight} from 'react-icons/tb'

export default defineField({
  name: 'marqueeUI',
  title: 'Marquee UI',
  type: 'object',
  icon: TbArrowNarrowRight,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'foregroundColor',
      type: 'string',
      description: 'format hex : #123321',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      description: 'format hex : #123321',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Marquee UI',
      }
    },
  },
})
