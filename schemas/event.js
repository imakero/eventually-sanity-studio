export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the event.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Entertainment', value: 'entertainment' },
          { title: 'Education', value: 'education' },
          { title: 'After Work', value: 'after-work' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'agenda',
      title: 'Agenda',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'eventImage' }],
    },
  ],
}
