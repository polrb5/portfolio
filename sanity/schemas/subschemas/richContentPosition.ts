import {defineField, defineType} from 'sanity'

import {positionTitle, positionLocation, positionId, positionDesc, positionDetail} from '../fields';

export default defineType({
  name: 'richContentPosition',
  title: 'Simple Content Position',
  type: 'object',
  fields: [
    defineField(positionTitle),
    defineField(positionLocation),
    defineField(positionId),
    defineField(positionDesc),
    defineField(positionDetail)
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
