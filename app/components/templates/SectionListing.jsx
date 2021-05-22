import MainLayout from "../layout/MainLayout";
import Container from "../layout/Container";
import PostHorizontal from "../elements/PostHorizontal";
import Image from "next/image";
const SectionListing = ({ posts = [], sectionName }) => {
  return (
    <MainLayout>
      <Container>
        <div className='grid px-2 lg:px-0 grid-col-1 md:gap-5 md:grid-cols-6'>
          <div className='col-span-4'>
            {posts.map((post) => (
              <PostHorizontal {...post} />
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

export default SectionListing;
