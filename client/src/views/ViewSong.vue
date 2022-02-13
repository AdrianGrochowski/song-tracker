<template>
  <v-container>
<v-card class="mt-6">
      <v-card-title relative>
        Song Metadata
        <!-- <router-link to="/songs/create" absolute>
          <v-btn fab class="cyan accent-2" small absolute right middle>
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </router-link> -->
      </v-card-title>
      <v-card-text>
        {{song}}
        <youtube :video-id="song.youtubeId" :player-width="500" :player-height="200" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
    data () {
        return {
            song: {}
        }
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    }
}
</script>

<style>

</style>