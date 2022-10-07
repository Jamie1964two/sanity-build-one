import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  //console.log(posts);

  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto">
      <Head>
        <title>River Walk Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Posts posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "post" && slug !=null]{
  _id,
  title,
  author-> {
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
