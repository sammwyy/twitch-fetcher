import TwitchProvider from "./providers/twitchProvider";

class TwitchFetcher {
    constructor (config) {
        this.twitchProvider = new TwitchProvider(config);
    }

    async getEmotesByID (id, { twitch = true, bttv = false, ffz = false, stv = false }) {
        let result = [];
        
        if (twitch) {
            result = [...result, await this.twitchProvider.getEmotesByID(id)];
        }

        return result;
    }
}

export default TwitchFetcher;