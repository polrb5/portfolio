import { defineField, defineType } from 'sanity';
import { FaHome } from "react-icons/fa";
import { desc, title } from './fields';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: FaHome,
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Home',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField(title),
        defineField(desc),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      }
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField(title),
        defineField(desc),
      ]
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