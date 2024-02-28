import { Link, Outlet, useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import unescape from "../../utils/unescape";
import styles from "./Post.module.css";

export default function Post() {
  const post = useLoaderData();

  return (
    <>
      <section className={styles.postComponent}>
        <h2>{unescape(post.title)}</h2>
        <span className={styles.createdDate}>
          {new Date(post.createdDate).toDateString()}
        </span>
        <article>
          <Markdown skipHtml className={styles.postContent}>
            {unescape(post.content)}
          </Markdown>
        </article>
        <p>
          See more <Link to={"/posts"}>posts</Link>
        </p>
      </section>
      <Outlet />
    </>
  );
}
