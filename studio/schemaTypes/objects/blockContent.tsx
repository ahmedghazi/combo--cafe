import {defineType, defineArrayMember} from 'sanity'
// import { FiExternalLink, LinkIcon } from 'react-icons/fi'
import {LinkIcon} from '@sanity/icons'
import {FiAlignCenter, FiAlignLeft, FiAlignRight} from 'react-icons/fi'
import {BiLinkExternal} from 'react-icons/bi'
import linkExternalTypes from '../misc/linkExternalTypes'
import ExternalLinkRenderer from '../../src/components/ExternalLinkRenderer'
import {RxButton} from 'react-icons/rx'

const TextL = (props: any): JSX.Element => (
  <p style={{fontSize: '1.5rem', marginTop: 0}}> {props.children} </p>
)
const Text2L = (props: any): JSX.Element => (
  <p style={{fontSize: '1.7rem', marginTop: 0}}> {props.children} </p>
)
const TextXL = (props: any): JSX.Element => (
  <p style={{fontSize: '2rem', marginTop: 0}}> {props.children} </p>
)

const AlignLeftRender = (props: any) => <p style={{textAlign: 'left'}}>{props.children}</p>
const AlignCenterRender = (props: any) => <p style={{textAlign: 'center'}}>{props.children}</p>
const AlignRightRender = (props: any) => <p style={{textAlign: 'right'}}>{props.children}</p>

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        // {
        //   title: 'Text LG (17px)',
        //   value: 'h3 text-lg',
        //   component: TextL,
        // },
        {
          title: 'Text LG (26px)',
          value: 'h2 text-2lg',
          component: TextL,
        },
        // {title: 'H4', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'},
        {
          title: 'Text XL (50px)',
          value: 'text-xl',
          component: TextXL,
        },
        // {
        //   title: 'Texte indenté',
        //   value: 'text-index',
        //   component: TextIndent,
        // },
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          // {title: 'Underline', value: 'u', icon: () => 'u', component: Underline},
          // {title: 'Outline', value: 'outline', icon: () => 'o', component: Outline},
          {
            title: 'Align Left',
            value: 'align_left',
            icon: FiAlignLeft,
            component: AlignLeftRender,
          },
          {
            title: 'Align Center',
            value: 'align_center',
            icon: FiAlignCenter,
            component: AlignCenterRender,
          },
          {
            title: 'Align Right',
            value: 'align_right',
            icon: FiAlignRight,
            component: AlignRightRender,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal link CTA',
            name: 'linkInternalCta',
            type: 'object',
            icon: RxButton,
            description: 'boutton avec outline',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Reference',
                to: linkExternalTypes,
              },
            ],
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            title: 'Internal link',
            name: 'linkInternal',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Reference',
                to: linkExternalTypes,
              },
            ],
          },
          {
            title: 'External link',
            name: 'linkExternal',
            type: 'object',
            icon: BiLinkExternal,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
              {
                title: 'CTA',
                name: 'cta',
                description: "s'affiche comme un bouton avec outline",
                type: 'boolean',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      // name: 'tableau',
      type: 'keyValGroup',
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      type: 'embed',
    }),
  ],
})
