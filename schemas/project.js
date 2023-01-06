export default {
	name: 'project',
	title: 'Project',
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
			name: 'date',
			type: 'datetime',
		},
		{
			name: 'place',
			type: 'string',
		},
		{
			name: 'description',
			type: 'text',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
		{
			name: 'projectType',
			title: 'Project Type',
			type: 'string',
			options: {
				list: [
					{ value: 'personal', title: 'Personal' },
					{ value: 'client', title: 'Client' },
					{ value: 'school', title: 'School' },
				],
			},
		},
		{
			name: 'link',
			type: 'url',
		},
		{
			name: 'repo',
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
