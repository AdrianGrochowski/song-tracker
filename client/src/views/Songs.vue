<template>
  <v-container>
    <!-- <v-flex xs6 offset-xs3> -->
    <v-card class="mt-6" title="Login">
      <v-card-title relative>
        Songs
        <router-link to="/songs/create" absolute>
          <v-btn fab class="cyan accent-2" small absolute right middle>
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </router-link>
      </v-card-title>
      <v-card-text>
        <div v-for="song in songs" :key="song.id">
          <v-row>
            <v-col>
              <h3>{{ song.title }}</h3>
              <h4>{{ song.artist }}</h4>
              <p>{{ song.album }}</p>
              <router-link :to="{ name: 'Song', params: { songId: song.id }}"> 
                <v-btn>
                  View
                </v-btn>
              </router-link>
            </v-col>
            <v-col>
              <img :src="song.albumImageUrl" class="img-fluid" style="width: 100px;" alt="" />
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
    <!-- </v-flex> -->
  </v-container>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data() {
    return {
      songs: [],
    };
  },
  methods: {},
  async mounted() {
    this.songs = (await SongsService.index()).data;
  },
};
</script>

<style scoped>
</style>