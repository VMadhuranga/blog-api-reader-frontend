export default function Comments() {
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
          <li>
            <p>Commented user</p>
            <p>Comment</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
