import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'top',
  title: 'トップ',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // FiledName
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }), 
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
})