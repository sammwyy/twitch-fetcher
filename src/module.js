import FFZProvider from "./providers/FFZProvider";
import TwitchProvider from "./providers/twitchProvider";

class TwitchFetcher {
    constructor (config = {}) {
        this.ffzProvider = new FFZProvider();
        this.twitchProvider = new TwitchProvider(config.twitchClientID, config.twitchOAuth);
    }

    async getEmotesByID (id, {twitch, bttv, ffz, stv} = { twitch: true }) {
        let result = [];
        
        if (twitch) {
            result = [...result, ...await this.twitchProvider.getEmotesByID(id)];
        }

        if (ffz) {
            result = [...result, ...await this.ffzProvider.getEmotesByID(id)];
        }

        return result;
    }
}

export default TwitchFetcher;