import {defineField, defineArrayMember, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'
import modulesList from '../objects/modules/modulesList'
import {baseLanguage} from '../locale/supportedLanguages'
import slug from '../fields/slug'

export default defineType({
  type: 'document',
  name: 'studio',
  title: 'Studio',
  icon: FolderIcon,
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
      group: 'editorial',
    }),
    slug,
    defineField({
      name: 'subTitle',
      type: 'string',
      title: 'Soustitre',
      group: 'editorial',
      hidden: true,
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Lieu',
      description: 'Aubervilliers, Colombes, ...',
      group: 'editorial',
    }),

    defineField({
      name: 'imageCover',
      type: 'figure',
      title: 'Image clef',
      description: 'Visible on liste pages, project cards (1400px)',
      group: 'editorial',
    }),
    defineField({
      name: 'imageHero',
      type: 'figure',
      title: 'Image Hero',
      description: 'Visible on detail page (2000px), if no Slider Hero',
      group: 'editorial',
    }),
    defineField({
      name: 'SliderHero',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
      ],
      title: 'Slider Hero',
      description: 'Visible on detail page (2000px), if no Image Hero',
      group: 'editorial',
    }),
    defineField({
      name: 'excerpt',
      type: 'localeString',
      title: 'Extrait',
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
      title: 'Text',
      group: 'editorial',
    }),

    defineField({
      name: 'infos',
      type: 'array',
      of: [{type: 'summaryDetail'}],
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
