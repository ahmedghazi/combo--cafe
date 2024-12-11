import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'
import pageModulaire from '../schemaTypes/documents/pageModulaire'

export const linkResolver: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add locations for documents of type 'post'
    pageModulaire: defineLocations({
      // Select one or more fields
      select: {
        title: 'title.fr',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/${doc?.slug}`,
          },
          {title: 'Home', href: `/`},
        ],
      }),
    }),
  },
}
