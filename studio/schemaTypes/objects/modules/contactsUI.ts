import {defineField} from 'sanity'
import {baseLanguage} from '../../locale/supportedLanguages'
import {MdConnectWithoutContact} from 'react-icons/md'

export default defineField({
  name: 'contactsUI',
  title: 'Contacts UI',
  type: 'object',
  icon: MdConnectWithoutContact,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'localeBlockContent'}],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        // subtitle: 'Intertitre',
      }
    },
  },
})
