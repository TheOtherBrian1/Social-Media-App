export default {
    name: 'pin',
    title: 'Pin',
    type: 'document', 
    fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string'
            },
            {
                name: 'about',
                title: 'About',
                type: 'string'
            },
            {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                    hotspot: true
                }
            },
            {
                name: 'postedBy',
                title: 'PostedBy',
                type: 'postedBy'
            },
            {
                name: 'save',
                title: 'Save',
                type: 'array', 
                of: [{type: 'save'}]
            }
    ]
}