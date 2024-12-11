import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'summaryDetail',
  title: 'Summary Detail',
  type: 'object',
  // icon: BsInfoSquare,

  fields: [
    defineField({
      name: 'summary',
      type: 'localeString',
      title: 'Libellé',
    }),
    defineField({
      name: 'detail',
      type: 'localeBlockContent',
    }),
  ],
  preview: {
    select: {
      title: `summary.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Summary Detail',
      }
    },
  },
})
