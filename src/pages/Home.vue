<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Bloggr</h1>
    <div class="row" v-if="$auth.isAuthenticated">
      <div class="col">
        <form class="form-inline" @submit.prevent="newBlog">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="blog.title" />
            <input type="text" class="form-control" placeholder="Body" v-model="blog.body" />
          </div>
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
import Blog from "@/components/BlogsComponent.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {
      blog: {
        title: "",
        creatorEmail: ""
      }
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    newBlog() {
      this.$store.dispatch("newBlog", this.blog);
    }
  },
  components: {
    Blog
  }
};
</script>
