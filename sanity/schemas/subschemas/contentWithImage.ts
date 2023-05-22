import {defineField, defineType} from 'sanity'

import {text, textAsTitle, image} from '../fields';

export default defineType({
  name: 'contentWithImage',
  title: 'Simple Content with Image and Text',
  type: 'object',
  fields: [
    defineField(image),
    defineField(textAsTitle),
    defineField(text),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection: Record<"title", any>) {
      return {
        title: selection.title,
      }
    },
  },
})
