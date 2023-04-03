<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3 search-bg">
        <Searchbar />
      </div>
      <div class="col-9">
        <section class="row">
          <div class="col-4" v-for="gift in gifts" :key="gift.id">
            <GiftCard :giftProp="gift" />
          </div>
        </section>
      </div>
    </section>
  </div>
</template >

<script>
import { onMounted, computed } from 'vue';
import Searchbar from '../components/Searchbar.vue';
import GiftCard from '../components/GiftCard.vue';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';
import { AppState } from '../AppState.js';



export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
        // logger.log(AppState.gifts)
      }
      catch (error) {
        logger.log(error)
      }

    }
    onMounted(() => {
      getGifts();
    })
    return {

      gifts: computed(() => AppState.gifts)
    }

  },
  components: { Searchbar, GiftCard }
}
</script>

<style scoped lang = "scss" >
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.search-bg {
  background-color: #37663C;
  min-height: 93vh;
}
</style >
