<template>
  <div class="uk-flex uk-flex-column uk-text-center uk-height-1-1" id="navShadow">
    <router-link
      exact
      to="/"
      active-class="activeLink"
      class="home uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >Home</router-link>
    <router-link
      exact
      to="/portfolio"
      active-class="activeLink"
      class="portfolio uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >Portfolio</router-link>
    <router-link
      exact
      to="/skills"
      active-class="activeLink"
      class="skills uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >Skills</router-link>
    <router-link
      exact
      to="/blog"
      active-class="activeLink"
      class="blog uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >Blog</router-link>
    <router-link
      exact
      to="/about"
      active-class="activeLink"
      class="about uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >About</router-link>
    <router-link
      exact
      to="contact"
      active-class="activeLink"
      class="contact uk-flex uk-flex-center link uk-flex-middle uk-padding uk-height-1-1"
    >Contact</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      hoveredLink: true
    };
  }
};
</script>

<style lang="scss">
$back1: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
$back2: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);

$back3: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
$back4: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80);
$back5: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80);
$back6: linear-gradient(
    to right bottom,
    rgba(16, 29, 44, 0.95),
    rgba(16, 29, 44, 0.95)
  ),
  url(https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80);

.link:hover {
  background: #ffb400;
  -webkit-transition: all ease 0.8s;
  -moz-transition: all ease 0.8s;
  transition: all ease 0.8s;
  color: white;
}

.activeLink {
  background: #ffb400 !important;
  color: #e9f4ff;
  text-decoration: none !important;
  letter-spacing: 3px;
}
a {
  /*background: #4c51c6;*/
  position: relative;
  width: 100%;
  text-decoration: none !important;
  letter-spacing: 3px;

  background-size: cover;
  color: #e9f4ff;
}
.home {
  background-image: $back1;
}
.blog {
  background-image: $back2;
}
.portfolio {
  background-image: $back3;
}
.skills {
  background-image: $back4;
}
.about {
  background-image: $back5;
}
.contact {
  background-image: $back6;
}
#navShadow {
  box-shadow: 0 13px 25px hsla(0, 0%, 100%, 0.09);
}
</style>