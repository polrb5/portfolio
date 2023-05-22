import {defineField, defineType} from 'sanity';

import {href, text} from '../fields';

export default defineType({
  name: 'linkWithSecondLanguage',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'English',
      type: 'string',
    }),
    defineField({
      name: 'germanText',
      title: 'German',
      type: 'string',
    }),
    defineField({
      name: 'frenchText',
      title: 'French',
      type: 'string',
    }),
    defineField({
      name: 'italianText',
      title: 'Italian',
      type: 'string',
    }),
    defineField({
      name: 'spanishText',
      title: 'Spanish',
      type: 'string',
    }),
    defineField({
      name: 'catalanText',
      title: 'Catalan',
      type: 'string',
    }),
    defineField(href),
    defineField({
      name: 'sublinks',
      title: 'Sublinks',
      type: 'array',
      of: [{
        type: 'sublinkWithSecondLanguage',
        name: 'Sublink',
      }],
    }),
  ],
})
