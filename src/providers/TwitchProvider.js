import { normalizeTwitchEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";

export default class TwitchProvider {
    constructor (clientID, twitchOAuth) {
        this.clientID = clientID;
        this.oauth = twitchOAuth;
    }

    async sendGetRequest (url) {
        if (this.clientID == null) {
            throw new Error("Twitch Client ID cannot be null.");
        } else if (this.oauth == null) {
            throw new Error("Twitch OAuth cannot be null.")
        }
        
        let req = await fetch(url, {
            headers: {
                "Client-ID": this.clientID,
                "Authorization": "Bearer " + this.oauth
            }
        });

        let body = await req.json();

        if (req.ok) {
            return body.data;
        } else {
            throw new Error(`${body.status} ${body.error} - ${body.message}`);
        }
    }

    async getEmotesByID (id) {
        let emotes = await this.sendGetRequest("https://api.twitch.tv/helix/chat/emotes?broadcaster_id=" + id);
        return normalizeTwitchEmotes(emotes);
    }
}