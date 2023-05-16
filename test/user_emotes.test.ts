import TwitchFetcher from '../src';

const { TWITCH_CLIENT_ID, TWITCH_ACCESS_TOKEN } = process.env;

test('Fetch User Emotes by ID', async () => {
  const fetcher = new TwitchFetcher({
    auth: {
      accessToken: TWITCH_ACCESS_TOKEN as string, 
      clientId: TWITCH_CLIENT_ID as string
    }
  });

  const emotes = await fetcher.getEmotes("280803646", ["7tv", "bttv", "ffz", "twitch"]);
  
  expect(emotes.length).toBeGreaterThanOrEqual(500);
  expect(emotes.find((v) => v.code == "PETTHESAMMWY")).not.toBeNull();
  expect(emotes.find((v) => v.code == "uwu")).not.toBeNull();
  expect(emotes.find((v) => v.code == "uwu")).not.toBeNull();
});

test('Fetch User Emotes by Username', async () => {
  const fetcher = new TwitchFetcher({
    auth: {
      accessToken: TWITCH_ACCESS_TOKEN as string, 
      clientId: TWITCH_CLIENT_ID as string
    }
  });

  const emotes = await fetcher.getEmotesByUsername("sammwy", ["7tv", "bttv", "ffz", "twitch"]);
  
  expect(emotes.length).toBeGreaterThanOrEqual(500);
  expect(emotes.find((v) => v.code == "PETTHESAMMWY")).not.toBeNull();
  expect(emotes.find((v) => v.code == "uwu")).not.toBeNull();
  expect(emotes.find((v) => v.code == "uwu")).not.toBeNull();
});