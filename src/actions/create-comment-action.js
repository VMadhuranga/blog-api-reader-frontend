import axios from "axios";

export default async function createCommentAction(params, formData) {
  try {
    await axios.post(
      `http://localhost:3000/posts/${params.post_id}/comments`,
      formData,
    );
  } catch (error) {
    console.error(error.response.statusText);
    return error.response.data;
  }
}
