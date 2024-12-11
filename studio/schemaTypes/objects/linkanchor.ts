// import supportedLanguages from "../locale/supportedLanguages";
import {defineField} from 'sanity'

export default defineField({
  title: 'Link Anchor',
  name: 'linkAnchor',
  type: 'object',
  preview: {
    select: {
      label: `label`,
    },
    prepare(selection) {
      const {label} = selection
      return {
        title: label,
      }
    },
  },
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'target',
      type: 'string',
      description: 'html anchor id',
      // to: [{type: 'pageModulaire'}],
    }),
  ],
})
