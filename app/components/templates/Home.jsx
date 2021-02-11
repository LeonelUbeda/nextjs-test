import MainLayout from '../layout/MainLayout'
import MultiPosts from '../modules/MultiPosts'
import PostHorizontal from '../elements/PostHorizontal'
import Image from 'next/image'

const Home = ({posts}) => {
    return (
        <MainLayout>
            <MultiPosts posts={posts}/>
            <div className="container mx-auto px-2 md:px-0 grid grid-col-1 md:gap-5 md:grid-cols-6 py-5 max-w-6xl">
                <div className="col-span-4">
                    {posts.map(post => <PostHorizontal {...post}/>)}
                </div>
                <div className="col-span-2">
                    <Image src={"https://source.unsplash.com/random/400x700"} width="400" height="700" layout="responsive"/>
                </div>
            </div>
        </MainLayout>
    )
}

export default Home