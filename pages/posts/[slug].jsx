import { getPostBySlug, getPostsSlug } from "../../app/api/api";
import PostDetail from "../../app/components/templates/PostDetail";

function AnimeDetail({ post = {} }) {
  return <PostDetail post={post} />;
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
