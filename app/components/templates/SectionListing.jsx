import MainLayout from '../layout/MainLayout'
import MultiPosts from '../modules/MultiPosts'
import PostHorizontal from '../elements/PostHorizontal'

const SectionListing = ({posts = [], sectionName}) => {
    return (
        <MainLayout>
            <div className="container mx-auto grid grid-col-1 md:gap-5 md:grid-cols-6 py-20 max-w-6xl">
                <div className="col-span-4">
                    {posts.map(post => <PostHorizontal {...post}/>)}
                </div>
                <div className="col-span-2">
                    <img src="https://source.unsplash.com/random/400x700" alt="" />
                </div>
            </div>
        </MainLayout>
    )
}

export default SectionListing