import Axios from 'axios'

export default {
  getAll () { return Axios.get('https://localhost:44343/api/Posts') },
  get (id) { return Axios.get('https://localhost:44343/api/Posts/' + id) },
  create (data) { return Axios.post('https://localhost:44343/api/Posts/Create', data) },
  update (id, data) { return Axios.put('https://localhost:44343/api/Posts/' + id, {PostId: id, Title: data.title, Content: data.content, Created: data.created}) },
  delete (id) { return Axios.delete('https://localhost:44343/api/Posts/' + id) },
  getDetail (id) { return Axios.get('https://localhost:44343/api/Posts/' + id) },
  // Comments
  getAllComment () { return Axios.get('https://localhost:44343/api/Comments') },
  getComment (id) { return Axios.get('https://localhost:44343/api/Comments/' + id) },
  createComment (data) { return Axios.post('https://localhost:44343/api/Comments/Create', data) },
  updateComment (id, data) { return Axios.put('https://localhost:44343/api/Comments/' + id, {PostId: data.postId, CommentId: id, Username: data.username, Content: data.content, Created: data.created}) },
  deleteComment (id) { return Axios.delete('https://localhost:44343/api/Comments/' + id) },
  getDetailComment (id) { return Axios.get('https://localhost:44343/api/Comments/' + id) }
}
