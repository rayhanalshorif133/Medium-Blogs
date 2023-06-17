import CommentForm from "@/components/CommentForm";
import Header from "@/components/Header";
import { portableTextSerializer } from "@/libs/portableTextSerializer";
import Head from "next/head";
import PortableText from "react-portable-text";
import { sanityClient, urlFor } from "./../../sanity";
import { ParamsSlug, Post } from "./../../typings.d";

interface Props {
  post: Post;
}

export default function postDetails({ post }: Props) {
  console.log(post);
  return (
    <div>
      <Head>
        <title>Medium Blogs | Post Details</title>
      </Head>
      <Header />
      <img
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl font-bold mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description} by {post.author.name}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src={urlFor(post.author.image).url()!}
          />
          <p className="font-extralight text-sm">
            Blog post by{" "}
            <span className="text-green-600 font-bold">{post.author.name}</span>{" "}
            - Published at {post._createdAt}
            {/* {new Date(post._createdAt).toLocaleString()} */}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            className="text-lg text-gray-700"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
            projectId={
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "development"
            }
            content={post.body}
            serializers={portableTextSerializer}
          />
        </div>
      </article>

      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
      <CommentForm post={post} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'post' ]{
  _id,
  slug{current},}`;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: ParamsSlug) => {
  const slug = params?.slug;
  const query = `
    *[_type == 'post' && slug.current == "${slug}"][0]{
    _id,title,
      author->{
      name,image
    },
    description,
    mainImage,
    slug,
    _createdAt,
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
    revalidate: 60, // In seconds after a successful request to validate the request
  };
};
