import { getPostsBySection, getSections } from '../../app/api/api'
import SectionListing from '../../app/components/templates/SectionListing'



function AnimeDetail({posts = []}){
    return <SectionListing posts={posts}/>
}

export async function getStaticProps(context){
    const {section} = context.params
    const posts = await getPostsBySection(section)
    return {
        props: {
            posts
        }
    }
}


export async function getStaticPaths() {
    const sections = await getSections()
    console.log(sections)
    const paths = sections.map(section => ({params: { section: section.name } }))
    return {
        paths,
        fallback: false
    }
}

export default AnimeDetail

