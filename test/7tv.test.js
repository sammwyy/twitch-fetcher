const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get 7TV emotes by Username', async () => {
    const emotes = await fetcher.getEmotesByName("fapparamoarr", { "7tv": true });
    expect(emotes.length).not.toBe(0);
});