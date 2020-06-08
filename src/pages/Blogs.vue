<template>
  <div class="Blogs container">
    <div class="row">
      <div class="col-6">
        <span class="card-title font-weight-bold">{{blog.title}}</span>
        <span class="text-muted">~{{blog.creator}}</span>
        <p class="card-text">
          tags: {{blog.tags}}
          <br />
          published: {{blog.published}}
          <br />
          _id {{blog._id}}
          <br />
          title: {{blog.title}}
          <br />
          body: {{blog.body}}
          <br />
          creatorEmail: {{blog.creatorEmail}}
          <br />
          createdAt: {{blog.createdAt}}
          <br />
          updatedAt: {{blog.updatedAt}}
          <br />
          creator: {{blog.creator}}
          <br />
        </p>
        <button type="button" class="btn btn-outline-danger" @click="deleteBlog">DELETE!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  mounted() {
    // NOTE when the page loads, go get the blog who's id is in the url params
    this.$store.dispatch("getBlogComments", this.$route.params.id);
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteblog", this.blog._id);
    }
  },

  // NOTE take some action before navigation changes
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveBlog", {});
    next();
  },
  computed: {
    blog() {
      return this.$store.state.active;
    }
  }
};
</script>

<style>
</style>