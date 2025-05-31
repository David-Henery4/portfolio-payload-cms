import type { CollectionConfig } from 'payload'


export const SkillsList: CollectionConfig = {
  slug: 'skills-list',
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
      name: 'order',
      type: 'number',
      unique: true,
      required: true,
      index: true,
      admin: {
        step: 1
      }
    },
    {
      name: 'skillIcon',
      label: 'Skill Icon',
      type: 'code',
      required: true,
      admin: {
        language: 'html',
      },
    },
  ],
}