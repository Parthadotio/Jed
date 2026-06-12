export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}