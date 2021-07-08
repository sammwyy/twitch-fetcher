import TwitchProvider from "./providers/twitchProvider";

class TwitchFetcher {
    constructor (config) {
        this.twitchProvider = new TwitchProvider(config);
    }

    async getEmotesByID (id, {twitch, bttv, ffz, stv} = { twitch: true }) {
        let result = [];
        
        if (twitch) {
            result = [...result, ...await this.twitchProvider.getEmotesByID(id)];
        }

        return result;
    }
}

export default TwitchFetcher;