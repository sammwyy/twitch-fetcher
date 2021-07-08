import { normalize7TVEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";
import SevenTV from "7tv";

export default class SevenTVProvider {
    constructor () {
        this.stv = SevenTV();
    }

    async getEmotesByName (username) {
        let emotes = await this.stv.fetchUserEmotes(username);
        return normalize7TVEmotes(emotes);
    }
}