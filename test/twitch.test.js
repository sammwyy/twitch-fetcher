const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher({
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchOAuth: process.env.TWITCH_OAUTH
});

test('Get User data by Username', async () => {
    const user = await fetcher.getUserData({username: "sammwy"});
    expect(user.login).toBe("sammwy");
})

test('Get User data by ID', async () => {
    const user = await fetcher.getUserData({id: "280803646"});
    expect(user.id).toBe("280803646");
})

test('Get Twitch emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { twitch: true });
    expect(emotes.length).not.toBe(0);
});

test('Get Twitch emotes by Username', async () => {
    const emotes = await fetcher.getEmotesByName("sammwy", { twitch: true });
    expect(emotes.length).not.toBe(0);
});