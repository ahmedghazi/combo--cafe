import {baseLanguage} from '../../locale/supportedLanguages'
import {defineField} from 'sanity'
import {BiCarousel} from 'react-icons/bi'

export default {
  name: 'sliderCardImageTextUI',
  title: 'Slider Card Image Text UI',
  type: 'object',
  icon: BiCarousel,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Titre',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section',
      // readOnly: true,
      options: {
        source: (doc, context) => {
          console.log({doc})
          console.log({context})
          return context.parent ? context.parent.title.fr : 'title'
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gridSize',
      type: 'number',
      initialValue: 3,
      description: 'Items par ligne, par défaut 3',
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
      initialValue: false,
      description: '',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'cardImageText'}],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'items.0.image.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Slider Card Image Text UI',
      }
    },
  },
}
