import axios from "axios";

export default async function createCommentAction(baseUrl, params, formData) {
  try {
    await axios.post(`${baseUrl}/posts/${params.post_id}/comments`, formData);
  } catch (error) {
    return error.response.data;
  }
}
