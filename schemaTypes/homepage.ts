import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Header section
    defineField({
      name: 'headerSection',
      title: 'Header Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ],
    }),
    // Icon list section
    defineField({
      name: 'iconListSection',
      title: 'Icon List Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'body', title: 'Body', type: 'text' },
            { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
})
