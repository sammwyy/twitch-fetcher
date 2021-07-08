const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher();

test('Get FFZ emotes by ID', async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { ffz: true });
    expect(emotes.length).not.toBe(0);
});