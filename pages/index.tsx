import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { getPosts } from "../app/api/api";
import Home from "../app/components/templates/Home";
import Header from "../app/components/modules/Header";

export default function HomePage({ posts }) {
  return <Home posts={posts} />;
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
