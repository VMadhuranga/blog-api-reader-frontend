export default async function postLoader(params) {
  try {
    const response = await fetch(
      `http://localhost:3000/posts/${params.post_id}`,
      {
        mode: "cors",
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
  }
}
