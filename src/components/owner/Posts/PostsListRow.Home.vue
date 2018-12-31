<template>
  <tr>
    <div>
      <b-card
        v-model="post.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="mb-2"
      >
        <p
          class="card-text"
          tag="article"
        >{{post.created}}</p>
        <p class="card-text">{{ post.content }}</p>
        <b-button
          variant="danger"
          @click="onDetailsClick"
        >Details</b-button>
      </b-card>
    </div>
  </tr>
</template>
<script>
export default {
  name: 'PostsListRow',
  props: ['post'],
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
