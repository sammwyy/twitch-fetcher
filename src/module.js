import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import TwitchProvider from "./providers/TwitchProvider";
import SevenTVProvider from "./providers/STVProvider";

class TwitchFetcher {
    constructor (config = {}) {
        this.bttvProvider = new BTTVProvider();
        this.ffzProvider = new FFZProvider();
        this.stvProvider = new SevenTVProvider();
        this.twitchProvider = new TwitchProvider(config.twitchClientID, config.twitchOAuth);
    }

    async getUserData ({id, username}) {
        if (username == null && id == null) {
            throw new Error("You must specify an ID or Username.");
        }

        if (username) {
            return this.twitchProvider.getUserByName(username);
        } else {
            return this.twitchProvider.getUserByID(id);
        }
    }

    async getEmotesByID (id, config = { twitch: true }) {
        if (id == null) {
            throw new Error("You must specify an ID.");
        }

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
        if (username == null) {
            throw new Error("You must specify an Username.");
        }

        const data = await this.getUserData({username});
        if (data == null) {
            throw new Error("Couldn't fetch this user.");
        }

        return this.getEmotesByID(data.id, settings);
    }
}

export default TwitchFetcher;
