<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="createOwner">
        <b-form-group :label-cols="2" breakpoint="md" horizontal label="Username:" for="username">
          <b-col :md="5">
            <b-input disabled id="username" v-model="formData.username" maxlength="60"   required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Create:"
          for="create">
          <b-col :md="5">
            <b-input
              id="created"
              v-model="formData.created"
              type="date"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Content:"
          for="content">
          <b-col :md="5">
            <b-input
              id="content"
              v-model="formData.content"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>
         <br ><br >
        <b-col
          :md="5"
          offset="4">
          <b-button
            type="submit"
            variant="info">Save</b-button>
          <b-button
            :to="{ name: 'CommentsList' }"
            variant="danger">Cancel</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>

<style>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>

<script>
import OwnerService from '@/api-services/owner.service'

export default {
  name: 'OwnerCreate',
  data () {
    return {
      formData: {
        postId: '1',
        username: 'nttv4a',
        created: new Date().toISOString().slice(0, 10),
        content: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  methods: {
    createOwner () {
      OwnerService.createComment(this.formData).then(() => {
        this.isSuccessfully = true
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully created'
        this.$refs.alertModal.show()
        this.formData = {
          username: '',
          created: new Date().toISOString().slice(0, 10),
          content: '',
          postId: '1'
        }
      }).catch((error) => {
        this.isSuccessfully = false
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    },
    onAlertModalOkClick () {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'PostsList' })
      }
    }
  }
}
</script>
