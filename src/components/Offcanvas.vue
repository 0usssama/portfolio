<template>
  <div>
    <!-- This is a button toggling the off-canvas -->
    <button
      class="uk-button uk-button-default uk-hidden@s"
      uk-toggle="target: #my-id"
      type="button"
    >
      <span uk-icon="table"></span>
    </button>
    <!-- This is an anchor toggling the off-canvas -->
    <a href="#my-id" uk-toggle></a>

    <!-- This is the off-canvas -->
    <div id="my-id" uk-offcanvas>
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <div class="uk-flex uk-flex-column uk-text-center uk-height-1-1">
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/" class="uk-link-text">Home</router-link>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/portfolio" class="uk-link-text">Portfolio</router-link>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/skills" class="uk-link-text">Skills</router-link>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/blog" class="uk-link-text">Blog</router-link>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/about" class="uk-link-text">About</router-link>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-middle uk-padding uk-height-1-1">
            <router-link to="/contact" class="uk-link-text">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>