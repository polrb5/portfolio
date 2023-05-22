import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'simpleText',
  title: 'Simpletext',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
