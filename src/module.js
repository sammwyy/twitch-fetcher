import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import TwitchProvider from "./providers/twitchProvider";

class TwitchFetcher {
    constructor (config = {}) {
        this.bttvProvider = new BTTVProvider();
        this.ffzProvider = new FFZProvider();
        this.twitchProvider = new TwitchProvider(config.twitchClientID, config.twitchOAuth);
    }

    async getUserData ({id, username}) {
        if (username) {
            return this.twitchProvider.getUserByName(username);
        } else {
            return this.twitchProvider.getUserByID(id);
        }
    }

    async getEmotesByID (id, {twitch, bttv, ffz, stv} = { twitch: true }) {
        let result = [];
        
        if (twitch) {
            result = [...result, ...await this.twitchProvider.getEmotesByID(id)];
        }

        if (ffz) {
            result = [...result, ...await this.ffzProvider.getEmotesByID(id)];
        }

        if (bttv) {
            result = [...result, ...await this.bttvProvider.getEmotesByID(id)];
        }

        return result;
    }

    async getEmotesByName (username, settings) {
        const { id } = await this.getUserData({username});
        return this.getEmotesByID(id, settings);
    }
}

export default TwitchFetcher;