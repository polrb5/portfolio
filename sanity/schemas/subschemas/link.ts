import {defineField, defineType} from 'sanity';

import {href, text} from '../fields';

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField(href),
    defineField({
      name: 'sublinks',
      title: 'Sublinks',
      type: 'array',
      of: [{
        type: 'sublink',
        name: 'Sublink',
      }],
    }),
  ],
})
