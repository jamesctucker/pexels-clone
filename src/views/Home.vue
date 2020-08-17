<template>
  <div class="home">
    <section class="search">
      <input type="text" v-model="searchTerm" /><button @click="fetchImages">
        Search
      </button>
    </section>
    <section class="results-section">
      <div
        class="image-wrapper"
        v-for="photo in results.photos"
        :key="photo.id"
      >
        <img
          class="image"
          :src="photo.src.medium"
          :alt="`photo of ${searchTerm}`"
          @click="favoritePhoto(photo)"
        />
        <span class="like-btn" v-if="favoritedPhotos.includes(photo.id)"
          >❤️</span
        >
        <span class="like-btn" v-else>🤍</span>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient } from "pexels";

export default {
  name: "Home",
  data() {
    return {
      searchTerm: "",
      results: [],
      favoritedPhotos: [],
    };
  },
  methods: {
    fetchImages() {
      const key = process.env.VUE_APP_PEXELS_API_KEY;
      console.log(key);
      const client = createClient(key);
      const query = this.searchTerm;

      client.photos.search({ query, per_page: 10 }).then((photos) => {
        console.log(photos);
        this.results = photos;
      });
    },
    favoritePhoto(photo) {
      if (!this.favoritedPhotos.includes(photo.id)) {
        this.favoritedPhotos.push(photo.id);
        this.$store.dispatch("addFavorite", {
          photo,
        });
      } else {
        let index = this.favoritedPhotos.indexOf(photo.id);

        this.favoritedPhotos.splice(index);
        this.$store.dispatch("deleteFavorite", {
          photo,
        });
      }
    },
  },
};
</script>

<style scoped>
.home {
  padding: 1rem;
}

.results-section {
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

.like-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
}
</style>
