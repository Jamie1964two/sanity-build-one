import React from "react";
import PropTypes from "prop-types";
import { Post } from "../typings";
import Link from "next/link";
//import { urlFor } from "../sanity";
import { sanityClient, urlFor } from "../sanity";

interface Props {
  posts: [Post];
}

const Posts = ({ posts }: Props) => {
  const thumbnailsArray: JSX.Element[] = posts.map((post) => {
    console.log(post.slug);
    return (
      <Link key={post._id} href={`/post/${post.slug.current}`}>
        <div className=" m-4 pb-4 grow border-gray-400 border-[1px] shadow-md rounded-xl overflow-hidden group cursor-pointer">
          <img
            className="h-40 md:h-60 lg:h-80 w-full pb-4 object-cover group-hover:scale-110 transition-transform duration-800 ease-in-out"
            src={urlFor(post.mainImage).url()!}
            // src={`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/${post.mainImage.asset._ref}.jpg`}
          />
          <p className="text-center p-1 mt-1 md:text-lg font-semibold font-serif text-gray-500 ">
            {post.title}
          </p>
          <div className="flex justify-center align-middle">
            <p className="text-center p-1 pt-2 my-auto text-sm font-serif text-gray-500 ">
              by {post.author.name}
            </p>

            <img
              className="h-8 md:h-10 lg:h-12 object-contain"
              src={urlFor(post.author.image).url()!}
            />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {thumbnailsArray}
    </div>
  );
};
// className="flex space-between flex-wrap">
export default Posts;
