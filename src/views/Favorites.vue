<template>
  <div class="favorites">
    <h1>My Favorite Photos</h1>
    <section class="favorites-section">
      <div class="image-wrapper" v-for="item in favorites" :key="item.photo.id">
        <img class="image" :src="item.photo.src.medium" alt="photo" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Favorites",
  computed: {
    favorites() {
      return this.$store.state.favoritePhotos;
    },
  },
};
</script>
<style scoped>
.favorites-section {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: left;
}

.image-wrapper {
  flex-grow: 1;
  flex-basis: 150px;
  max-width: 250px;
  margin: 1px;
  position: relative;
}

.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
