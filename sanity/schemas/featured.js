import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category name',
      type: 'string',
      validation: (rule) =>rule.required(),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: "reference",
      to: [{type: "restaurant"}]
    }] 
    }),
  ],
})
