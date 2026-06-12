export default {
  name: 'banner',
  title: 'Banners',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
    },
    {
      name: 'placement',
      title: 'Placement',
      type: 'string',
      options: {
        list: [
          { title: 'Homepage Top', value: 'homepage_top' },
          { title: 'Homepage Bottom', value: 'homepage_bottom' },
          { title: 'Courses Page', value: 'courses_page' },
          { title: 'Blog Page', value: 'blog_page' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}