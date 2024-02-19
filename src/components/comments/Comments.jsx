import { useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();

  return (
    <section>
      <h3>Comments</h3>
      <form>
        <div>
          <label htmlFor="user_name">Name:</label>
          <input type="text" name="user_name" id="user_name" />
        </div>
        <div>
          <label htmlFor="comment">Name:</label>
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <article>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment._id}>
                <p>{comment.commentedUser}</p>
                <p>{comment.text}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
