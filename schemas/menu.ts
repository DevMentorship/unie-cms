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
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'Price',
      title: 'price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
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
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'fats',
      title: 'fats',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'carbohydrates',
      title: 'carbohydrates',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'calories',
      title: 'calories',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
  ],
})
