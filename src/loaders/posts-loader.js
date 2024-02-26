import axios from "axios";

export default async function postsLoader() {
  try {
    const response = await axios.get("http://localhost:3000/posts");

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
