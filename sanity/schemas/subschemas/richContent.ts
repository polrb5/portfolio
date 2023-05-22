import {defineField, defineType} from 'sanity'

import {title, desc} from '../fields';

export default defineType({
  name: 'richContent',
  title: 'Simple Content',
  type: 'object',
  fields: [
    defineField(title),
    defineField(desc),
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
