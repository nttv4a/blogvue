<template>
  <b-container class="bv-example-row">
    <b-row>
        <b-col cols="8"><posts-list-home
                v-for="post in posts"
                :key="post.PostId"
                :post="post"
                /></b-col>
        <b-col cols="4">col-4</b-col>
    </b-row>
</b-container>
</template>
<script>
import OwnerService from '@/api-services/owner.service'
import PostsListHome from '@/components/owner/posts/PostsList.Home'

export default {
  name: 'Home',
  components: {
    PostsListHome
  },
  data () {
    return {
      posts: [],
      selectedOwnerId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
    this.fetchOwners()
  },
  methods: {
    fetchOwners () {
      OwnerService.getAll().then((response) => {
        this.posts = response.data
      })
    }
  }
}
</script>
<style scoped>
.homeText{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>
