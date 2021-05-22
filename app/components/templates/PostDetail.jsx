import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import Container from "../layout/Container";
import ReactMarkDown from "react-markdown";
import React from "react";

const paragraphRenderer = ({ children }) => {
  const hasImage = !!children.find(
    (child) =>
      typeof child === "object" && child.key && !!child.key.match(/image/g)
  );
  return hasImage ? children : <p>{children}</p>;
};
// const imageRenderer = (e) => {
//
//     return (
//         <div>
//             <Image src={e.src} width="auto" height="auto" className="rounded-lg" />
//         </div>
//     )
// }

const PostDetail = ({ post = {} }) => {
  return (
    <MainLayout>
      <Container>
        <div className='mx-auto max-w-4xl'>
          <h1 className='mb-2 text-2xl md:mb-5 sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 text-center'>
            {post.title}
          </h1>
        </div>
        {post.excerpt ? (
          <div className='mx-auto max-w-4xl my-5 md:my-10 px-2'>
            <p className='text-gray-700 text-lg md:text-2xl tracking-wide text-center'>
              {post.excerpt}
            </p>
          </div>
        ) : null}

        <div className='my-8 md:my-10'>
          <Image
            src={post.coverImage?.url || ""}
            width='1920'
            height='1080'
            className='rounded-xl'
            layout='responsive'
          />
        </div>
      </Container>
      <Container max='5xl'>
        <div className='mt-8 md:mt-12 prose prose-red max-w-none lg:prose-lg xl:prose-2xl space-y-3 sm:space-y-4 lg:space-y-8 xl:space-y-10'>
          <ReactMarkDown
            unwrapDisallowed={false}
            renderers={{ paragraph: paragraphRenderer }}
            source={post.content.markdown}
          />
        </div>
      </Container>
    </MainLayout>
  );
};

export default PostDetail;
