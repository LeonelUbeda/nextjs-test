import Image from 'next/image'
import MainLayout from '../layout/MainLayout'
import ReactMarkDown from 'react-markdown'

const PostDetail = ({post = {}}) => {
    return (
        <MainLayout>
            <div className="container mx-auto px-3 sm:px-10 md:px-20 xl:px-0 max-w-5xl">
                <div>
                    <div className="mx-auto max-w-4xl mt-8 md:my-12">
                        <h1 className="mb-2 text-2xl md:my-5 sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 text-center">{post.title}</h1>
                    </div>
                    {post.excerpt ?
                        <div className="mx-auto max-w-4xl my-5 md:my-10 px-2">
                            <p className="text-gray-700 text-lg md:text-2xl tracking-wide">
                                {post.excerpt}
                            </p>
                        </div>
                    : null }

                    <div className="my-8 md:my-10">
                        <Image src={post.coverImage?.url || ""} width="1920" height="1080" className="rounded-xl" layout="responsive"/>

                    </div>
                    <div className="mt-8 md:mt-12 prose sm:prose lg:prose-lg xl:prose-2xl space-y-3 sm:space-y-4 lg:space-y-8 xl:space-y-10">
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