const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("123456", { twitch: true });
    expect(emotes.length).toBe(3);
});