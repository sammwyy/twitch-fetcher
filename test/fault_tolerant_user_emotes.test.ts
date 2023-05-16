import TwitchFetcher from '../src';

const { TWITCH_CLIENT_ID, TWITCH_ACCESS_TOKEN } = process.env;

test('Fetch No Emotes User by Username', async () => {
  const fetcher = new TwitchFetcher({
    auth: {
      accessToken: TWITCH_ACCESS_TOKEN as string, 
      clientId: TWITCH_CLIENT_ID as string
    }
  });

  const emotes = await fetcher.getEmotesByUsername("ppy", ["7tv", "bttv", "ffz", "twitch"]);
  expect(emotes.push).toBeTruthy();
});