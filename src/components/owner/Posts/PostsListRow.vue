<template>
  <tr>
    <!-- <td>{{ owner.postId }}</td> -->
    <td>{{ post.title }}</td>
    <!-- <td>{{ owner.content }}</td> -->
    <td>{{ post.created }}</td>
    <!-- <td>{{ owner.image }}</td> -->
    <!-- <td>{{ owner.userName }}</td> -->
    <td>
      <b-button
        variant="default"
        @click="onDetailsClick">Details</b-button>
    </td>
    <td>
      <b-button
        variant="success"
        @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button
        variant="danger"
        @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'PostsListRow',
  props: [ 'post' ],
  methods: {
    onDetailsClick () {
      this.$emit('details', this.post.postId)
    },
    onUpdateClick () {
      this.$emit('update', this.post.postId)
    },
    onDeleteClick () {
      this.$emit('delete', this.post.postId)
    }
  }
}
</script>
