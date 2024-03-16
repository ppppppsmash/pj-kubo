import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Top',
  title: 'トップ',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title', // FiledName
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
})