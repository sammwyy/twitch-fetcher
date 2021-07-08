import { normalizeTwitchEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";

export default class TwitchProvider {
    constructor ({ twitchClientID, twitchOAuth }) {
        this.clientID = twitchClientID;
        this.oauth = twitchOAuth;
    }

    async sendGetRequest (url) {
        let req = await fetch(url, {
            headers: {
                "Client-ID": this.twitchClientID,
                "Authorization": "Bearer " + this.oauth
            }
        });

        let body = await req.json();

        if (req.ok) {
            return body;
        } else {
            throw new Error(`${body.status} ${body.error} - ${body.message}`);
        }
    }

    async getEmotesByID (id) {
        let emotes = await this.sendGetRequest("https://api.twitch.tv/helix/chat/emotes?broadcaster_id=" + id);
        return normalizeTwitchEmotes(emotes);
    }
}