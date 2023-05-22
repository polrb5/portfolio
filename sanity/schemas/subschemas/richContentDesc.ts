import {defineField, defineType} from 'sanity'

import {title, desc} from '../fields';

export default defineType({
  name: 'richContentDesc',
  title: 'Simple Content Desc',
  type: 'object',
  fields: [
    defineField(desc),
  ],
  preview: {
    select: {
      desc: 'desc',
    },
    prepare(selection: Record<"desc", any>) {
      const block = (selection.desc || []).find((titleBlock: any) => {
        return titleBlock._type === 'block';
      });
      return {
        title: block
          ? block.children
            .filter((child: any)  => child._type === 'span')
            .map((span: any) => span.text)
            .join('')
          : 'No desc'
      }
    },
  },
})
