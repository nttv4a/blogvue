<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Username:</strong>
        </div>
        <div class="col-md-3">
          {{ owner.username }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Create:</strong>
        </div>
        <div class="col-md-3">
          {{ owner.created }}
        </div>
      </div>
       <div class="row">
        <div class="col-md-3">
          <strong>Content:</strong>
        </div>
        <div class="col-md-3">
          {{ owner.content }}
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import OwnerService from '@/api-services/owner.service'

export default {
  name: 'OwnerDetails',
  data () {
    return {
      owner: {}
    }
  },
  created () {
    OwnerService.getDetailComment(this.$router.currentRoute.params.id).then((response) => {
      this.owner = response.data
    })
  }
}
</script>
