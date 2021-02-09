import MainLayout from '../layout/MainLayout'
import MultiPosts from '../modules/MultiPosts'
import PostHorizontal from '../elements/PostHorizontal'
import Image from 'next/image'
const SectionListing = ({posts = [], sectionName}) => {
    return (
        <MainLayout>
            <div className="container mx-auto grid px-2 lg:px-0 grid-col-1 md:gap-5 md:grid-cols-6 py-20 max-w-5xl">
                <div className="col-span-4">
                    {posts.map(post => <PostHorizontal {...post}/>)}
                </div>
                <div className="col-span-2 hidden md:block">
                    <Image src={"https://source.unsplash.com/random/400x700"} width="400" height="700" layout="responsive"/>
                </div>
            </div>
        </MainLayout>
    )
}

export default SectionListing