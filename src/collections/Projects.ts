import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'projectImage', 
      type: 'upload', 
      relationTo: 'media', 
      required: true,
    },
    {
      name: 'projectUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'projectRepo',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'text',
        },
      ],
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
