import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import TwitchProvider from "./providers/twitchProvider";
import SevenTVProvider from "./providers/STVProvider";

class TwitchFetcher {
    constructor (config = {}) {
        this.bttvProvider = new BTTVProvider();
        this.ffzProvider = new FFZProvider();
        this.stvProvider = new SevenTVProvider();
        this.twitchProvider = new TwitchProvider(config.twitchClientID, config.twitchOAuth);
    }

    async getUserData ({id, username}) {
        if (username) {
            return this.twitchProvider.getUserByName(username);
        } else {
            return this.twitchProvider.getUserByID(id);
        }
    }

    async getEmotesByID (id, config = { twitch: true }) {
        let result = [];
        
        if (config.twitch) {
            result = [...result, ...await this.twitchProvider.getEmotesByID(id)];
        }

        if (config.ffz) {
            result = [...result, ...await this.ffzProvider.getEmotesByID(id)];
        }

        if (config.bttv) {
            result = [...result, ...await this.bttvProvider.getEmotesByID(id)];
        }

        if (config["7tv"]) {
            let userdata = await this.getUserData({id});
            result = [...result, ...await this.stvProvider.getEmotesByName(userdata.login)];
        }

        return result;
    }

    async getEmotesByName (username, settings) {
        const { id } = await this.getUserData({username});
        return this.getEmotesByID(id, settings);
    }
}

export default TwitchFetcher;