<template>
  <tr>
    <td>{{ comment.username }}</td>
    <td>{{ comment.content }}</td>
    <td>{{ comment.created }}</td>
    <!-- <td>{{ Like }}</td> -->
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
  name: 'CommentsListRow',
  props: [ 'comment' ],
  methods: {
    onDetailsClick () {
      this.$emit('details', this.comment.commentId)
    },
    onUpdateClick () {
      this.$emit('update', this.comment.commentId)
    },
    onDeleteClick () {
      this.$emit('delete', this.comment.commentId)
    }
  }
}
</script>
