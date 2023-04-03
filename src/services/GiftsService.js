import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await giftApi.get('api/gifts')
        AppState.gifts = res.data.map(g => new Gift(g))
        // logger.log(res.data)
    }
}

export const giftsService = new GiftsService()