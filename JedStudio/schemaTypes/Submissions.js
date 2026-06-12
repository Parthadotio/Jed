export default {
  name: 'submission',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'service',
      title: 'Interested Service',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    },
  ],

  __experimental_actions: ['read', 'delete'],
}