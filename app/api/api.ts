import { graphcms } from './config'



export const getSections = async () => {
    const { __type: { enumValues: sections } } = await graphcms.request(`
        {
            __type(name: "Section") {
                enumValues {
                    name
                }
            }
        }
    `)
    return sections
}

export const getPostsBySection = async (section) => {
    const {posts} = await graphcms.request(`
        {
            posts(where: {section: ${section}}){
                title,
                coverImage {
                    url
                },
                author {
                    name
                }
            }
        }
    `)
    
    return posts
} 




