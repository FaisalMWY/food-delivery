import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (rule) =>rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule)=>rule.max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (rule) =>rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Restaurant\s rating(between 1 - 5)',
      type: 'number',
      validation: (rule) =>rule.required().min(1).max(5).error("Please enter a number that's between 1 and 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: "reference", to: [{type: "dish"}]
    
    },
    ]
    }),
  ],
})
