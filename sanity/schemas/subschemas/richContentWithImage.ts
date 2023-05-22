import {defineField, defineType} from 'sanity'

import {title, desc, image} from '../fields';

export default defineType({
  name: 'richContentWithImage',
  title: 'Simple Content with Image',
  type: 'object',
  fields: [
    defineField(image),
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
