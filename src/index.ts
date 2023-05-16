import SevenTV from '7tv';
import { TwitchAPI } from 'twitch-api-ts';

import Emote from './entities/emote';
import Provider from './entities/provider';
import BetterTTV from 'betterttv';
import FFZ from 'frankerfacez';

interface TwitchFetcherConfig {
  auth: {
    clientId: string;
    accessToken: string;
  };
}

export default class TwitchFetcher {
  //private readonly config: TwitchFetcherConfig;
  private readonly twitch: TwitchAPI;

  constructor(config: TwitchFetcherConfig) {
    const { accessToken, clientId } = config.auth;

    //this.config = config;
    this.twitch = new TwitchAPI({ accessToken, clientId });
  }

  async getEmotes(
    userId: string,
    providers: Provider[] = ['twitch'],
  ): Promise<Emote[]> {
    const emotes: Emote[] = [];

    if (providers.includes('7tv')) {
      const providerEmotes = await SevenTV.getEmotes(userId);
      const fixedEmotes: Emote[] = providerEmotes.map((emote) => ({
        code: emote.name,
        id: emote.id,
        owner: emote.data.owner.username,
        type: '7tv',
        url: {
          low: `${emote.data.host.url}/${emote.data.host.files[0].name}`,
          mid: `${emote.data.host.url}/${emote.data.host.files[1].name}`,
          high: `${emote.data.host.url}/${emote.data.host.files[2].name}`,
        },
      }));
      emotes.push(...fixedEmotes);
    }

    else if (providers.includes('bttv')) {
      const providerEmotes = await BetterTTV.getUserEmotes(userId);
      const fixedEmotes: Emote[] = providerEmotes.map((emote) => ({
        code: emote.code,
        id: emote.id,
        owner: emote.user?.displayName || emote.userId || "unknown",
        type: 'bttv',
        url: emote.src,
      }));
      emotes.push(...fixedEmotes);
    }

    else if (providers.includes('ffz')) {
      const providerEmotes = await FFZ.getUserEmotes(userId);
      const fixedEmotes: Emote[] = providerEmotes.map((emote) => ({
        code: emote.name,
        id: emote.id + "",
        owner: emote.owner.display_name, 
        type: 'ffz',
        url: {
          low: emote.urls[1],
          mid: emote.urls[2],
          high: emote.urls[4]
        },
      }));
      emotes.push(...fixedEmotes);
    }

    return emotes;
  }

  async getEmotesByUsername(
    username: string,
    providers: Provider[] = ['twitch'],
  ): Promise<Emote[]> {
    const user = await this.twitch.users.getUser({
      login: username
    });
    return await this.getEmotes(user.id, providers);
  }
}
