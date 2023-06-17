import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
     name: 'approved',
     title: 'Approved',
     type: 'boolean',
      description: 'Comments must be approved before they are published',
    }),
    
   defineField({
    name: 'email',
    type: 'string',
    }),
   defineField({
    name: 'comment',
    type: 'text',
   }),
   defineField({
    name: 'post',
    type: 'reference',
    to: [{type: 'post'}],
    }),
  ],
})
