<template>
  <div>
    <div class="uk-container uk-container-small">
      <div uk-grid>
        <div class="uk-width-expand@s">
          <img :src="require(`@/assets/img/` + project.image)" />
        </div>
      </div>
      <div class="uk-margin">
        <h1>{{project.name}}</h1>
        <p>{{project.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: this.$store.state.projects[this.$route.params.id]
    };
  }
};
</script>

<style>
</style>