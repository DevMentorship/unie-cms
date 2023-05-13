import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'Poster',
      title: 'Poster of dishes',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    }),
    defineField({
      name: 'dishName',
      title: 'Dish name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Weight',
      title: 'food weight',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Price',
      title: 'price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishDescription',
      title: 'Dish description',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      name: 'proteins',
      title: 'proteins',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fats',
      title: 'fats',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carbohydrates',
      title: 'carbohydrates',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'calories',
      title: 'calories',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
