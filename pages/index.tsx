import styles from "../styles/Home.module.css";
import React from "react";
import { getPosts } from "../app/api/api";
import Home from "../app/components/templates/Home";
import Head from "next/head";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de práctica</title>
      </Head>
      <Home posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
