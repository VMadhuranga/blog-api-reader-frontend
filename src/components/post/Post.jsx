import { Outlet, useLoaderData } from "react-router-dom";

export default function Post() {
  const post = useLoaderData();

  return (
    <>
      <section>
        <h2>{post.title}</h2>
        <p>{new Date(post.createdDate).toLocaleDateString()}</p>
        <article>{post.content}</article>
      </section>
      <Outlet />
    </>
  );
}
