interface Post {
  id: number;
  title: string;
  category: string;
}

export default async function BlogList() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Blog List</h2>
      <ul className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <a
              href={`/blog/tech/${post.id}`}
              className="text-lg text-blue-500 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
