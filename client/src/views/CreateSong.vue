<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mt-6">
          <v-card-title> Create Songs </v-card-title>
          <v-card-text>
            <v-text-field
              label="Title"
              required
              :rules="[required]"
              v-model="song.title"
            ></v-text-field>

            <v-text-field
              label="Artist"
              required
              :rules="[required]"
              v-model="song.artist"
            ></v-text-field>

            <v-text-field
              label="Genre"
              required
              :rules="[required]"
              v-model="song.genre"
            ></v-text-field>

            <v-text-field
              label="Album"
              required
              :rules="[required]"
              v-model="song.album"
            ></v-text-field>

            <v-text-field
              label="Album Image Url"
              required
              :rules="[required]"
              v-model="song.albumImageUrl"
            ></v-text-field>

            <v-text-field
              label="YouTube ID"
              required
              :rules="[required]"
              v-model="song.youtubeId"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card class="mt-6">
          <v-card-title> Song Structure </v-card-title>
          <v-card-text>
            <v-text-field
              label="Tab"
              multi-line
              required
              :rules="[required]"
              v-model="song.tab"
            ></v-text-field>

            <v-text-field
              label="Lyrics"
              multi-line
              required
              :rules="[required]"
              v-model="song.lyrics"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="create()"> Create Song </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      required: (value) => !!value || 'Required.'
    };
  },
  methods: {
    async create() {
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: 'Songs'
        })
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>