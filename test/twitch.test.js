const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get Twitch emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { twitch: true });
    expect(emotes.length).not.toBe(0);
});