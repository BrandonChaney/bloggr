import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: [],
    myBlogs: [],
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, data) {
      state.blogs = data
    },
    addBlogs(state, blog) {
      state.blogs.push(blog)
    },
    setActiveBlog(state, data) {
      state.activeBlog = data
    },
    setMyBlogs(state, myBlogs) {
      state.myBlogs = myBlogs
    },
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async newBlog({ commit, dispatch }, blog) {
      try {
        let res = await api.post('blogs', blog);
        commit("addBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async myBlogs() {
      try {
        let res = await api.get("profile/blogs")
        this.commit("setMyBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getFullBlog({ commit, dispatch }, id) {
      try {
        let res = await api.get('blogs/' + id)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({ commit, dispatch }, id) {
      try {
        let res = await api.delete('blogs/' + id)
        dispatch("getAllBlogs");
      } catch (error) {
        console.error(error)
      }
    },

  }
});
