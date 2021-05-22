import MainLayout from "../layout/MainLayout";
import MultiPosts from "../modules/MultiPosts";
import Container from "../layout/Container";
import PostHorizontal from "../elements/PostHorizontal";
import Post from "../elements/Post";
import Image from "next/image";

const Home = ({ posts }) => {
  return (
    <MainLayout>
      <Container>
        <div className='pb-5 mb-5 border-b md:mt-5 md:pb-12 border-gray-300'>
          <Post {...posts[1]} />
        </div>
        {/* <MultiPosts posts={posts} /> */}
      </Container>
      <Container>
        <div className='grid grid-col-1 md:gap-5 md:grid-cols-6'>
          <div className='col-span-4'>
            {posts.map((post) => (
              <PostHorizontal {...post} key={post.slug} />
            ))}
          </div>
          <div className='col-span-2 hidden md:block'>
            <Image
              src={"https://source.unsplash.com/random/400x700"}
              width='400'
              height='700'
              layout='responsive'
            />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Home;
