const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get BetterTTV emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { bttv: true });
    expect(emotes.length).not.toBe(0);
});

test('Get BetterTTV emotes by Username', async () => {
    const emotes = await fetcher.getEmotesByName("sammwy", { bttv: true });
    expect(emotes.length).not.toBe(0);
});