import { graphcms } from "./config";

export const getPostsSlug = async () => {
  const { posts } = await graphcms.request(`
        {
            posts(first: 1000){
                slug
            }
        }
    
    `);
  return posts;
};

export const getPostBySlug = async (slug) => {
  const { post } = await graphcms.request(`
        {
            post(where: {slug: "${slug}"}){
                title,
                slug,
                excerpt,
                author{
                    name,
                    slug,
                    picture {
                        url
                    }
                }
                content{
                    markdown
                },
                author {
                    name
                }
                coverImage {
                    url,
                    id
                }
            }
        }
    `);
  return post;
};

export const getPosts = async () => {
  const { posts } = await graphcms.request(`
        {
            posts{
                title,
                slug,
                excerpt,
                content{
                    markdown
                },
                author {
                    name,
                    slug
                }
                coverImage {
                    url,
                    id
                }
            }
        }
    `);
  return posts;
};

export const getSections = async () => {
  const {
    __type: { enumValues: sections },
  } = await graphcms.request(`
        {
            __type(name: "Section") {
                enumValues {
                    name
                }
            }
        }
    `);
  return sections;
};

export const getPostsBySection = async (section) => {
  const { posts } = await graphcms.request(`
        {
            posts(where: {section: ${section}}){
                title,
                slug,
                coverImage {
                    url
                },
                author {
                    name
                }
            }
        }
    `);

  return posts;
};

export const getAuthorBySlug = async (slug: string) => {
  const { author } = await graphcms.request(`
        {
            author(where: { slug: "${slug}" }){
                name,
                posts{
                    title,
                    slug,
                    coverImage {
                        url
                    },
                }
            }
        }    
    `);
  return author;
};

export const getAuthors = async () => {
  const { authors } = await graphcms.request(`
        {
            authors{
                slug
            }
        }
    `);
  return authors;
};
