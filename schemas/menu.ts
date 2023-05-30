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
      title: 'Food weight',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'Price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'dishDescription',
      title: 'Dish description',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(280),
    }),
    defineField({
      name: 'proteins',
      title: 'Proteins',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'fats',
      title: 'Fats',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'carbohydrates',
      title: 'Carbohydrates',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'calories',
      title: 'Calories',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
  ],
})
