import Comments from "../comments/Comments";

export default function Post() {
  return (
    <>
      <section>
        <h2>Post title</h2>
        <p>Post created date</p>
        <article>Post content</article>
      </section>
      <Comments />
    </>
  );
}
