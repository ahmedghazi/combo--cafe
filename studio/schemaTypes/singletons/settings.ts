import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Réglages (header, footer, ...)',
  type: 'document',
  icon: CogIcon,
  groups: [
    // {
    //   default: true,
    //   name: 'navigation',
    //   title: 'Navigation',
    // },
    {
      default: true,
      name: 'seo',
      title: 'Default SEO',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'misc',
      title: 'Misc',
    },
    {
      name: 'design',
      title: 'Design',
    },
  ],
  fields: [
    // defineField({
    //   name: 'seo',
    //   title: 'Defauly SEO',
    //   type: 'seo',
    //   group: 'seo',
    // }),
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      group: 'header',
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'localeBlockContent',
    //   description: "Visible en page d'accueil header",
    //   group: 'header',
    // }),
    // defineField({
    //   name: 'logo',
    //   title: 'Logo',
    //   type: 'image',
    //   options: {
    //     accept: 'image/svg+xml',
    //   },
    //   group: 'header',
    // }),
    defineField({
      name: 'comboStudioLogo',
      title: 'Combo Studio Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
      group: 'header',
    }),
    defineField({
      name: 'marqueeTopNav',
      type: 'string',
      title: 'Message défilant top header',
      group: 'header',
    }),
    defineField({
      name: 'navPrimary',
      title: 'Naviguation Primary',
      type: 'array',
      of: [
        {
          type: 'linkInternal',
        },
        {
          type: 'linkExternal',
        },
        {type: 'menuItem'},
      ],
      group: 'header',
    }),
    defineField({
      name: 'footerDark',
      title: 'Footer Dark ',
      type: 'boolean',
      group: 'footer',
    }),
    defineField({
      name: 'navSecondary',
      title: 'Naviguation Secondary',
      type: 'array',
      of: [
        {
          type: 'linkInternal',
        },
        {
          type: 'linkExternal',
        },
      ],
      group: 'footer',
    }),

    defineField({
      name: 'comboLogo',
      title: 'Combo world Logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
      group: 'footer',
    }),

    defineField({
      name: 'footerInfos',
      title: 'Infos',
      type: 'localeBlockContent',
      group: 'footer',
    }),

    defineField({
      name: 'message404',
      title: 'Message 404',
      type: 'localeBlockContent',
      group: 'misc',
    }),

    defineField({
      name: 'messageCookie',
      title: 'Message Cookie',
      type: 'localeBlockContent',
      group: 'misc',
    }),

    defineField({
      name: 'legalsUrl',
      title: 'Page de mentions légales',
      type: 'linkInternal',
      group: 'misc',
    }),

    defineField({
      name: 'customCss',
      type: 'text',
      group: 'design',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Réglages (header, footer, ...)',
      }
    },
  },
})
