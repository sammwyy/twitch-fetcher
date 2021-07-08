const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher();

test('Get BetterTTV emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { bttv: true });
    expect(emotes.length).not.toBe(0);
});