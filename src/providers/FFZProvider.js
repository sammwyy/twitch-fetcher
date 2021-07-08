import { normalizeFFZEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";

export default class TwitchProvider {
    async sendGetRequest (url) {
        let req = await fetch(url);
        let body = await req.json();

        if (req.ok) {
            return body.sets;
        } else {
            throw new Error(`${body.status} ${body.error} - ${body.message}`);
        }
    }

    async getEmotesByID (id) {
        let sets = await this.sendGetRequest("https://api.frankerfacez.com/v1/room/id/" + id);
        return normalizeFFZEmotes(sets);
    }
}