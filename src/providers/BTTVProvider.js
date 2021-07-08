import { normalizeBTTVEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";

export default class BTTVProvider {
    async sendGetRequest (url) {
        let req = await fetch(url);
        let body = await req.json();

        if (req.ok) {
            return [...body.channelEmotes, ...body.sharedEmotes];
        } else {
            throw new Error(`${body.status} ${body.error} - ${body.message}`);
        }
    }

    async getEmotesByID (id) {
        let emotes = await this.sendGetRequest("https://api.betterttv.net/3/cached/users/twitch/" + id);
        return normalizeBTTVEmotes(emotes);
    }
}