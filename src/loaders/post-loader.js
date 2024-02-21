import axios from "axios";

export default async function postLoader(params) {
  try {
    const response = await axios.get(
      `http://localhost:3000/posts/${params.post_id}`,
    );

    return response.data;
  } catch (error) {
    console.error(error.response.statusText);
    throw new Error(error.response.statusText);
  }
}
