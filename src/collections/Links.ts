import type { CollectionConfig } from 'payload'

export const Links: CollectionConfig = {
  slug: 'links',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Link Name',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'code',
      admin: {
        language: "html",
      },
      required: true,
    },
  ],
}