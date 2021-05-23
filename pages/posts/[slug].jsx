import { getPostBySlug, getPostsSlug } from "../../app/api/api";
import PostDetail from "../../app/components/templates/PostDetail";
import Head from "next/head";
function AnimeDetail({ post = {} }) {
  return (
    <>
      <Head>
        <title>{post.title} | Blog de prueba</title>
        <meta property='og:title' content={`${post.title} | Blog de prueba`} />
        <meta property='og:description' content={post.coverImage?.url} />
      </Head>
      <PostDetail post={post} />
    </>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPostsSlug();
  // console.log(posts)
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default AnimeDetail;
