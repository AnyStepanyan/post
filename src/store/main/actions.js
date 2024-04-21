import axios from "../../api/axiosInstance";

let actions = {
  async getPosts({ commit }) {
    try {
      const response = await axios.get("posts");
      commit("setPosts", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  async getcurrentPostComments({ commit }, id) {
    try {
      const response = await axios.get("comments");
      const currentPostComment = response.data.filter(
        (comment) => comment.postId == id
      );
      commit("setCurrentPostComments", currentPostComment);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  },

  async getCurrentPost({ commit }, id) {
    try {
      const response = await axios.get(`posts/${id}`);
      commit("setCurrentPost", response.data);
    } catch (error) {
      console.error("Error fetching current post:", error);
    }
  },

  async updatePost(_, { id, postBody }) {
    try {
      const response = await axios.patch(`posts/${id}`, {
        body: postBody,
      });
      return response.data
    } catch (error) {
      console.error("Error updating post:", error);
    }
  },

  async deletePost(_, id) {
    try {
      const response = await axios.delete(`posts/${id}`);
      return response.data
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  },

  async submitPost(_, post) {
    try {
      if (!post.title.trim() || !post.content.trim()) {
        throw new Error("Title and content are required");
      }
      const response = await axios.post("posts", {
        title: post.title,
        body: post.content,
        userId: 1,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
    }
  },
};
export default actions;
