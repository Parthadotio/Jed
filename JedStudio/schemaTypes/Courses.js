export default {
  name: 'course',
  title: 'Courses',
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
      options: { source: 'title' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'isFree',
      title: 'Is Free?',
      type: 'boolean',
    },
    {
      name: 'enrollmentLink',
      title: 'Enrollment Link',
      type: 'url',
    },
    // {
    //   name: 'order',
    //   title: 'Display Order',
    //   type: 'number',
    // },
  ],
}