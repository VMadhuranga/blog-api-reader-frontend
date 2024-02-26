import { Link, Outlet, useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import unescape from "../../utils/unescape";

export default function Post() {
  const post = useLoaderData();

  return (
    <>
      <section>
        <h2>{unescape(post.title)}</h2>
        <p>{new Date(post.createdDate).toLocaleDateString()}</p>
        <article>
          <Markdown skipHtml>{post.content}</Markdown>
        </article>
        <p>
          See more <Link to={"/posts"}>posts</Link>
        </p>
      </section>
      <Outlet />
    </>
  );
}
