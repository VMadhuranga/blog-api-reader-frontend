import axios from "axios";

export default async function createCommentAction(params, formData) {
  try {
    await axios.post(
      `http://localhost:3000/posts/${params.post_id}/comments`,
      formData,
    );
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data;
  }
}
