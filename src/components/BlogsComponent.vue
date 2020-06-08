<template>
  <div class="blog col-3">
    <div class="card">
      <div class="card-body">
        <router-link :to="{ name: 'Blog', params: { id: blog.id }}">
          <h4 class="card-title">{{blog.title}}</h4>
          <p class="card-text">{{blog.creator.name}}</p>
        </router-link>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="deleteBlog"
          v-if="isCreator"
        >Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["blog"],
  computed: {
    isCreator() {
      return this.$store.state.profile.email == this.blog.creatorEmail;
    }
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog._id);
    }
  }
};
</script>

<style>
</style>