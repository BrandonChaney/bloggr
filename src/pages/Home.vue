<template>
  <div class="home container-fluid">
    <div class="row text-center text-light">
      <div class="col-12">
        <h1>Welcome to Bloggr</h1>
      </div>
    </div>
    <div class="row" v-if="$auth.isAuthenticated">
      <div class="col">
        <form class="form-inline" @submit.prevent="newBlog">
          <input type="text" class="form-control" placeholder="Title" v-model="newBlogs.title" />
          <input type="text" class="form-control" placeholder="Body" v-model="newBlogs.body" />
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "@/components/BlogComponent.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {
      newBlogs: {
        title: "",
        body: ""
      }
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    newBlog(data) {
      this.$store.dispatch("newBlog", { ...this.newBlogs });
      this.newBlogs = {};
    }
  },
  components: {
    Blog
  }
};
</script>
