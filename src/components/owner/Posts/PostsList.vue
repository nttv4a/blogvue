<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
         <router-link :to="{ name: 'PostsCreate' }">Create Posts</router-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Created</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             <posts-list-row
                v-for="post in posts"
                :key="post.PostId"
                :post="post"
                @details="detailsOwner"
                @update="updateOwner"
                @delete="deleteOwner"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirm your action"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this post?</p>
    </b-modal>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </div>
</template>
<script>
import OwnerService from '@/api-services/owner.service'
import PostsListRow from '@/components/owner/posts/PostsListRow'

export default {
  name: 'PostsList',
  components: {
    PostsListRow
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
    updateOwner (PostId) {
      this.$router.push({ name: 'PostsUpdate', params: { id: PostId } })
    },
    detailsOwner (PostId) {
      this.$router.push({ name: 'PostsDetails', params: { id: PostId } })
    },
    deleteOwner (PostId) {
      this.selectedOwnerId = PostId
      this.$refs.deleteConfirmModal.show()
    },
    fetchOwners () {
      OwnerService.getAll().then((response) => {
        this.posts = response.data
      })
    },
    onDeleteConfirm () {
      OwnerService.delete(this.selectedOwnerId).then(() => {
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully deleted'
        this.$refs.alertModal.show()
        this.fetchOwners()
      }).catch((error) => {
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    },
    onDeleteModalHide () {
      this.selectedOwnerId = null
    }
  }
}
</script>
