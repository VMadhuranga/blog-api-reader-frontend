export default async function postsLoader() {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
  }
}
