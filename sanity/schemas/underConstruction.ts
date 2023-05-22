import { defineField, defineType } from 'sanity';
import { GiCrane } from "react-icons/gi";
import { desc, document, image, text, title } from './fields';

export default defineType({
  name: 'underConstruction',
  title: 'Web Under Construction',
  type: 'document',
  icon: GiCrane,
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Web Under Construction',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField(title),
        defineField(desc),
        defineField(image),
        defineField(text),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'downloadFile',
      title: 'Download File',
      type: 'object',
      fields: [
        defineField(title),
        defineField(document),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lang: '__i18n_lang',
    },
    prepare(selection) {
      const { lang } = selection
      return { ...selection, subtitle: lang }
    },
  },
})