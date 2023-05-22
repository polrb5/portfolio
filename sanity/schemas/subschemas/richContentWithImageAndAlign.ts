import {defineField, defineType} from 'sanity'

import {align, title, video} from '../fields';

export default defineType({
  name: 'richContentWithImageAndAlign',
  title: 'Simple Content with Image and Align',
  type: 'object',
  fields: [
    defineField(video),
    defineField(align),
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
