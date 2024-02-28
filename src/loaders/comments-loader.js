import axios from "axios";

export default async function commentsLoader(baseUrl, params) {
  try {
    const response = await axios.get(
      `${baseUrl}/posts/${params.post_id}/comments`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
}
