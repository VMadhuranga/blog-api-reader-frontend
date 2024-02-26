import { Link, useLoaderData } from "react-router-dom";
import unescape from "../../utils/unescape";
import styles from "./Posts.module.css";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <section className={styles.postsComponent}>
      <h2>Posts</h2>
      <article>
        {posts.length > 0 ? (
          <ul className={styles.postsList}>
            {posts.map((post) => {
              return (
                <li key={post._id}>
                  <Link to={`${post._id}`}>{unescape(post.title)}</Link>
                  <span>{new Date(post.createdDate).toDateString()}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.noPostMsg}>There are no posts yet</p>
        )}
      </article>
    </section>
  );
}
