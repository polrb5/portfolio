import {defineField, defineType} from 'sanity'

import {title} from '../fields';

export default defineType({
  name: 'richContentTitle',
  title: 'Simple Content Title',
  type: 'object',
  fields: [
    defineField(title),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection: Record<"title", any>) {
      const block = (selection.title || []).find((titleBlock: any) => {
        return titleBlock._type === 'block';
      });
      return {
        title: block
          ? block.children
            .filter((child: any)  => child._type === 'span')
            .map((span: any) => span.text)
            .join('')
          : 'No title'
      }
    },
  },
})
