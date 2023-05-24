import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Review',
      type: 'image',
    })
  ],
})
