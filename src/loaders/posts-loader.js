import axios from "axios";

export default async function postsLoader(baseUrl) {
  try {
    const response = await axios.get(`${baseUrl}/posts`);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
