import MainLayout from '../layout/MainLayout'


const PostDetail = ({post = {}}) => {
    return (
        <MainLayout>
            <h1>{post.slug}</h1>
        </MainLayout>
    )
}

export default PostDetail