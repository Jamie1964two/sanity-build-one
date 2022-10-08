import React from "react";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Post } from "../../typings";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const bodyContent = post.body[0].children[0].text;
  console.log(bodyContent);
  return (
    <>
      <Header />
      <div className=" m-4 pb-4 grow">
        <img
          className="h-full md:h-100 w-full pb-4 object-cover"
          src={urlFor(post.mainImage).url()!}
        />
        <p className="text-center text-xl p-1 my-8 md:text-4xl font-semibold font-serif text-gray-500">
          {post.title}
        </p>
        <p className="text-justify p-1 mt-1 md:text-lg font-serif text-gray-600 ">
          {bodyContent}
        </p>
      </div>
      <div className="flex justify-between md:justify-center space-x-4 m-4 mt-3 align-middle">
        <p className="font-bold text-lg text-gray-600 lg:text-2xl my-auto ">
          By {post.author.name}
        </p>
        <img
          className="h-20 md:h-30 lg:h-40 object-contain"
          src={urlFor(post.author.image).url()!}
        />
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post" && slug != null]{
      _id,
    slug {
    current
      }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug && slug != null][0]{
  _id,
  _createdAt,
  title,
  author-> {
  name,
  image
  },
'comments': *[
  _type == "comment" &&
  post._ref == ^._id &&
  approved == true],
description,
mainImage,
slug,
body
}`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};
