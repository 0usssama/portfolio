<template>
  <div class="uk-margin-medium-top">
    <!-- 
    <img alt="Vue logo" src="./../../assets/card.png" />-->

    <div class="uk-margin-left uk-margin-right" uk-grid>
      <div class="uk-width-1-2@m">
        <h1
          v-show="!projectClicked || $route.path == '/portfolio'"
          class="uk-text-bold uk-heading-small uk-text-bold uk-text-secondary uk-margin-large-bottom uk-width-expand@s"
        >PROJECT LIST</h1>
      </div>
      <div
        v-show="!projectClicked || $route.path == '/portfolio'"
        class="uk-width-1-1@m uk-flex uk-flex-center uk-grid-medium uk-child-width-expand@s uk-text-center uk-grid-match"
        uk-grid
      >
        <div v-for="(project, index) in projects " :key="index" class="uk-width-1-4@m">
          <div class>
            <div
              class="uk-card uk-card-hover uk-card-small uk-card-default animated flipInY delay-1s"
            >
              <div class="uk-card-media-top">
                <img :src="require(`@/assets/img/${project.image}`)" />
              </div>
              <div class="uk-card-body uk-text-left">
                <h3 class="uk-card-title">{{project.name}}</h3>
              </div>

              <div class="uk-child-width-1-2 uk-grid-small uk-padding-small" uk-grid>
                <div>
                  <a :href="project.githubLink" class="uk-button uk-button-secondary">
                    <span uk-icon="github"></span>
                  </a>
                </div>
                <div>
                  <button
                    v-show="!projectClicked || $route.path == '/portfolio'"
                    @click="goToProject(index)"
                    href="#"
                    class="uk-button uk-button-primary"
                  >
                    <span uk-icon="search"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 
    <div v-for="(project, index) in projects " :key="index">
      <button
        v-show="!projectClicked || $route.path == '/portfolio'"
        @click="goToProject(index)"
        class="uk-button uk uk-button-danger"
      >Project {{index}}</button>
    </div>

    <router-view v-show="projectClicked"></router-view>-->

    <router-view v-show="projectClicked"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.state.projects,
      projectClicked: false
    };
  },
  methods: {
    goToProject(val) {
      this.projectClicked = true;
      this.$router.push("/portfolio/projects/" + val);
    }
  }
};
</script>

<style>
</style>