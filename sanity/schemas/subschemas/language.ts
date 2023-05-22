import {defineType} from 'sanity'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'string',
  options: {
    list: [
      {title: 'English', value: 'en'},
      {title: 'German', value: 'de'},
      {title: 'French', value: 'fr'},
      {title: 'Italian', value: 'it'},
      {title: 'Spanish', value: 'es'},
      {title: 'Catalan', value: 'ca'},
    ]
  }
})
