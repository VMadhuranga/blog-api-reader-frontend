import axios from "axios";

export default async function commentsLoader(params) {
  try {
    const response = await axios.get(
      `http://localhost:3000/posts/${params.post_id}/comments`,
    );

    return response.data;
  } catch (error) {
    console.error(error.response.statusText);
    throw new Error(error.response.statusText);
  }
}
