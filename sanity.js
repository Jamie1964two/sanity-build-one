import {
  //createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

// function urlFor(source) {
//   return builder.image(source);
// }

// Standard sanity config
// Don't forget token, to get a preview client and authenticated client
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2022-10-04",
};

// export const {
//   sanityClient,
//   imageUrlBuilder,
//   PortableText,
//   sanityStaticProps,
//   useSanityQuery,
// } = setupNextSanity(config);

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);
