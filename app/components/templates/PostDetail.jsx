import Image from 'next/image'
import MainLayout from '../layout/MainLayout'
import ReactMarkDown from 'react-markdown'

const PostDetail = ({post = {}}) => {
    return (
        <MainLayout>
            <div className="container mx-auto px-3 py-3 sm:px-10 md:px-20 xl:px-0 max-w-5xl">
                <div>
                    <h1 className="mb-2 md:my-5 text-lg sm:text-3xl font-bold text-gray-800">{post.title}</h1>
                    <Image src={post.coverImage?.url || ""} width="1920" height="1080" layout="responsive"/>
                    <div className="mt-5 prose sm:prose lg:prose-lg xl:prose-2xl space-y-3 sm:space-y-4 lg:space-y-8 xl:space-y-10">
                        <ReactMarkDown>
                            {post.content.markdown}
                        </ReactMarkDown>
                    </div>
                </div>
            </div>
            
        </MainLayout>
    )
}

export default PostDetail