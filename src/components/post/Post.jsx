import { Link, Outlet, useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";
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
          <Markdown
            skipHtml
            className={styles.postContent}
            components={{
              code(props) {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    language={className?.split("-")[1]}
                    style={oneDark}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    style={{
                      fontSize: "0.9rem",
                      backgroundColor: "rgb(40, 44, 52)",
                      padding: "6px",
                      borderRadius: "5px",
                    }}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
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

Post.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
