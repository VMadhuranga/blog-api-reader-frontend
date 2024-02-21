import { Form, useActionData, useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();
  const error = useActionData();

  return (
    <section>
      <h3>Comments</h3>
      <Form method="post">
        <div>
          <label htmlFor="user_name">Name :</label>
          <input type="text" name="user_name" id="user_name" required />
          {error && (
            <span>
              {error.data.find((data) => data.path === "user_name").msg}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="comment">Comment :</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            required
          ></textarea>
          {error && (
            <span>
              {error.data.find((data) => data.path === "comment").msg}
            </span>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
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
