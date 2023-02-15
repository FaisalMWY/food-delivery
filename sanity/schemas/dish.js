import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation: (rule) =>rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule) =>rule.max(100),
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in SAR',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Dish image',
      type: 'image',
    }),
  ],
})
