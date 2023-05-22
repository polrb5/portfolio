import {defineField, defineType} from 'sanity';

import {href} from '../fields';

export default defineType({
  name: 'sublinkWithSecondLanguage',
  title: 'Sublink',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'English',
      type: 'string',
    }),
    defineField({
      name: 'germanSubtext',
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
  ],
})
