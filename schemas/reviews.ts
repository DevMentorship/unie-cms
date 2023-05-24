import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'string',
    }),
    defineField({
      name: 'stars',
      title: 'Stars',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'like',
      title: 'Like',
      type: 'image',
    }),
  ],
})
