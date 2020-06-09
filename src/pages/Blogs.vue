<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-title font-weight-bold">{{blog.blog.creatorEmail}}</div>
        <div class="card-body shadow">
          <div class="font-weight-bold pb-3">{{blog.blog.title}}</div>
          <div class="card-text">{{blog.blog.body}}</div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title text-center">Comments</h5>
            <div
              class="card"
              v-for="comment in blog.comments"
              :key="comment.id"
            >{{comment.creator.name}} - {{comment.body}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      newComments: {
        body: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("getFullBlog", this.$route.params.id);
    this.$store.dispatch("myBlogs", this.$auth.userInfo);
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  methods: {},
  components: {
    Comment
  }
};
</script>

<style>
</style>