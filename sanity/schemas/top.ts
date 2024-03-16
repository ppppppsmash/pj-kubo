import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'top',
  title: 'トップ',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // FiledName
      title: '標題',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: '順序',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '小標題',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: '圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }), 
    defineField({
      name: 'body',
      title: '文章',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
})