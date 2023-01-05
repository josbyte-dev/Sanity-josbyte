export default {
    name: 'design',
    title: 'Design',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'imageP',
            title: 'Image Reference',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'designType',
            title: 'Design Type',
            type: 'string',
            options: {
                list: [
                    { value: 'personal', title: 'Personal' },
                    { value: 'client', title: 'Client' },
                ],
            },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tools',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                layout: 'tags',
            },
        },
    ],
};