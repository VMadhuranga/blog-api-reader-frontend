export default async function commentsLoader(params) {
  try {
    const response = await fetch(
      `http://localhost:3000/posts/${params.post_id}/comments`,
      {
        mode: "cors",
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const comments = await response.json();

    return comments;
  } catch (error) {
    console.error(error);
  }
}
