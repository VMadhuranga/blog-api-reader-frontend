import axios from "axios";

export default async function postLoader(baseUrl, params) {
  try {
    const response = await axios.get(`${baseUrl}/posts/${params.post_id}`);

    return response.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
}
