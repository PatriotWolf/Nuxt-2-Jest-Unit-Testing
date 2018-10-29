<template>
  <div class="vertical-center">
    <div class="about-heading-content container-fluid text-center">
      <div class="row">
        <div class="col-xl-9 col-lg-10 mx-auto my-auto outerCard">
          <div class="bg-faded rounded p-5 mt-3 mb-3">
            <h1>Opps!!!</h1>
            <h2 class="section-heading mb-4">
              <span 
                v-if="error.statusCode === 404" 
                class="section-heading-upper">Page not found</span>
              <span 
                v-else 
                class="section-heading-upper">An error occurred</span>
            </h2>
            <nuxt-link to="/">Back to main page</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    error: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
.outerCard {
  border: solid 3px #fff;
  border-radius: 4px;
}
</style>
