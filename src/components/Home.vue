<template>
  <div class="uk-flex uk-flex-center uk-flex-middle uk-height-1-1 uk-light" uk-grid>
    <div class="uk-width-1-1@m uk-width-1-3@s uk-text-center">
      <h1 class="uk-heading-medium uk-padding">
        Hello, i'm
        <span style="color:#ffb400">BENOUNNAS Oussama</span>.
        <br />i'm junior web developer
      </h1>
      <div class>
        <div class="uk-flex uk-flex-center" uk-grid>
          <div class="width-1-1@m">
            <button
              class="uk-button uk-button-default uk-width-1-1"
              @click="goToProjects"
              uk-icon="icon: arrow-right"
            >Projects</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push("/portfolio");
    }
  }
};
</script>

<style>
#mainHome {
  background-image: linear-gradient(
      to right bottom,
      rgba(16, 29, 44, 0.96),
      rgba(16, 29, 44, 0.96)
    ),
    url(https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80);
  background-size: cover;
  transition: background-image ease-in 2s;
}
</style>