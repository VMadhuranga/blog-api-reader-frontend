import { Link, useLoaderData } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <section>
      <h2>Posts</h2>
      <article>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post._id}>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                <span>{new Date(post.createdDate).toLocaleDateString()}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
