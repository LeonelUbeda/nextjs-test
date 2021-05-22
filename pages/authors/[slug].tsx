import { getAuthors, getAuthorBySlug } from "../../app/api/api";
import MainLayout from "../../app/components/layout/MainLayout";
function AnimeDetail({ author }) {
  return (
    <MainLayout>
      <>
        <h2>Hey</h2>
        <h1>{author.name}</h1>
      </>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const author = await getAuthorBySlug(slug);
  return {
    props: {
      author,
    },
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();
  const paths = authors.map((author) => ({ params: { slug: author.slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default AnimeDetail;
