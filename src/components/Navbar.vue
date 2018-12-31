<template>
  <b-navbar
    toggleable="md"
    type="light"
    variant="faded"
    fixed="top"
  >

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'Home' }" ><img src="https://placekitten.com/g/30/30" width="30" height="30" class="d-inline-block align-top" alt="BV">Blog-VueJS</b-navbar-brand>

    <b-collapse
      is-nav
      id="nav_collapse"
    >
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'PostsList' }">Posts</b-nav-item>
        <b-nav-item :to="{ name: 'CommentsList' }">Comments</b-nav-item>
        <b-nav-item :to="{ name: 'PostsCreate' }">Create Post</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
          >Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown
          text="Lang"
          right
        >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">VN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav v-if="!account.user">
        <b-nav-item :to="{ name: 'LoginPage' }">Login</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown v-else right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>{{account.user.firstName}}</em>
          </template>
          <b-dropdown-item href="#">My Blog</b-dropdown-item>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>
<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: false
    }
  },
  computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
      ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
         ...mapActions('account', ['logout']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.logout()
                }
            });
        }
    }
}
</script>
