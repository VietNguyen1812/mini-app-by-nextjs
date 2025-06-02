import type { Metadata } from "next";

interface Post {
  id: string;
  title: string;
  body: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  ).then((res) => res.json());

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function BLogPost({
    params,

} : {
    params : {slug : string}
}) {
    const post : Post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.slug}`
    ).then(res => res.json());

    return (
        <div className = "p-4 max-w-4xl mx-auto">
            <h2 className = "text-3xl font-bold text-gray-800 mb-4">
                {post.title}
            </h2>
            <p className = "text-lg text-gray-600 mb-4">
                {params.slug}
            </p>
            <p className = "text-base text-gray-600">{post.body}</p>
        </div>
    )
}
