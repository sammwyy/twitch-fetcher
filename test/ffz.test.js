const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get FrankerFaceZ emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { ffz: true });
    expect(emotes.length).not.toBe(0);
});

test('Get FrankerFaceZ emotes by Userame', async () => {
    const emotes = await fetcher.getEmotesByName("sammwy", { ffz: true });
    expect(emotes.length).not.toBe(0);
});