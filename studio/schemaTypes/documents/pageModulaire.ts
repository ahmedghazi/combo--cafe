// import i18n from "../i18n";
// import localizePreview from "../localizePreview";
import {defineField, defineArrayMember, defineType} from 'sanity'
// import {baseLanguage} from '../locale/supportedLanguages'
// import {FiServer} from 'react-icons/fi'
import modulesList from '../objects/modules/modulesList'
// import {validateSlug} from '../../utils/validateSlug'
import {StackIcon} from '@sanity/icons'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineType({
  name: 'pageModulaire',
  type: 'document',
  title: 'Page Modulaire',
  icon: StackIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],

  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
      description: 'Le nom de la page',
      group: 'editorial',
    }),

    defineField({
      name: 'subTitle',
      type: 'localeString',
      title: 'Soustitre',
      group: 'editorial',
      description: 'Visible dans les listes page, dans la card (cartouche fond noir)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL basée sur le titre (sans espace ni caractère autre que a-z-0-9',
      options: {
        source: `title.${baseLanguage}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'subMenu',
      title: 'Sous menu',
      description:
        'basé sur les slugs (ancre) des modules, générer le slug depuis le module, et mettre le slug dans le champs val',
      type: 'array',
      of: [
        {
          type: 'keyVal',
        },
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'imageCover',
      type: 'figure',
      title: 'Image clef',
      description: 'Visible dans les listes page, dans la card (1400px)',
      group: 'editorial',
    }),
    defineField({
      name: 'excerpt',
      type: 'localeString',
      title: 'Extrait',
      group: 'editorial',
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      description: 'Zone de contenu Modulaire (images, textes, embed)',
      type: 'array',
      of: modulesList,
      group: 'editorial',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      return fields && fields.seo ? true : 'SEO needed'
    }),
  preview: {
    select: {
      title: 'seo.metaTitle',
      subtitle: 'seo.metaDescription',
      media: 'seo.metaImage',
    },
  },
})
