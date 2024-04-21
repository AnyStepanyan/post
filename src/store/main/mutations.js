let mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setCurrentPostComments(state, payload) {
    state.currentPostComments = payload;
  },
  setCurrentPost(state, payload) {
    state.currentPost = payload;
  },
};

export default mutations;
