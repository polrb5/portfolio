import {defineField, defineType} from 'sanity'

import {title, desc, secondaryDescription, image} from '../fields';

export default defineType({
  name: 'richContentTwoColumnsWithImage',
  title: 'Simple Content Two Columns with Image',
  type: 'object',
  fields: [
    defineField(image),
    defineField(title),
    defineField(desc),
    defineField(secondaryDescription),
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
