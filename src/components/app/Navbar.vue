<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <span>{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="">
                <i class="material-icons">account_circle</i>
                {{ "ProfileTitle" | localize }}
              </router-link>
            </li>
            <li>
              <a href="#" class="" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>
                {{ "Exit" | localize }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data: () => ({
    date: new Date(),
  }),
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
  },
  mounted() {
    const interval = setInterval(() => {
      this.date = new Date();
    }, 60000);
    const dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });

    this.$once("hook:beforeDestroy", function () {
      clearInterval(interval);
      if (dropdown && dropdown.destroy) {
        dropdown.destroy();
      }
    });
  },
};
</script>
<style>
.navbar {
  background: #161619;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0),
    0 1px 5px 0 rgb(0 0 0 / 25%);
}
</style>