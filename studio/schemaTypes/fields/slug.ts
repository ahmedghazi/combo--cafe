import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  description:
    'Click on generate, Semantic URL based on title (no space no char other than a-z-0-9',
  options: {
    source: `title.${baseLanguage}`,
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
  group: 'editorial',
})
