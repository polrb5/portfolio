import {defineField, defineType} from 'sanity';

import {href} from '../fields';

export default defineType({
  name: 'sublink',
  title: 'Sublink',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField(href),
  ],
})
