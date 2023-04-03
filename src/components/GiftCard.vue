<template>
    <div class="m-2 ">
        <div class="selectable bg-white rounded">
            <img class="rounded-top pb-2" :src="giftProp.url" alt="">
            <div class="d-flex align-items-center justify-content-center text-center">
                <span>{{ giftProp.tag }}</span>
            </div>
        </div>
    </div>
</template>


<script>

import { Gift } from '../models/Gift.js';


export default {
    props: {
        giftProp: { type: Gift, required: true }
    },
    setup() {
        return {

        };
    },
};
</script>
<style scoped>
img {
    /* align-content: center; */
    height: 20vh;
    width: 100%;
}
</style>