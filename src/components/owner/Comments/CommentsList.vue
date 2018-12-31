<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
         <router-link :to="{ name: 'CommentsCreate' }">Create Comments</router-link>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>Comment</th>
                <th>Created</th>
                <!-- <th>Likes</th> -->
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             <comments-list-row
                v-for="comment in comments"
                :key="comment.CommentId"
                :comment="comment"
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
      <p class="my-4">Are you sure you want to delete this comment?</p>
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
import CommentsListRow from '@/components/owner/comments/CommentsListRow'

export default {
  name: 'CommentsList',
  components: {
    CommentsListRow
  },
  data () {
    return {
      comments: [],
      selectedOwnerId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created () {
    this.fetchOwners()
  },
  methods: {
    updateOwner (CommentId) {
      this.$router.push({ name: 'CommentsUpdate', params: { id: CommentId } })
    },
    detailsOwner (CommentId) {
      this.$router.push({ name: 'CommentsDetails', params: { id: CommentId } })
    },
    deleteOwner (CommentId) {
      this.selectedOwnerId = CommentId
      this.$refs.deleteConfirmModal.show()
    },
    fetchOwners () {
      OwnerService.getAllComment().then((response) => {
        this.comments = response.data
      })
    },
    onDeleteConfirm () {
      OwnerService.deleteComment(this.selectedOwnerId).then(() => {
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
