# Twitch Fetcher

Fetch for Twitch channel and Emotes. (Includes BTTV, FFZ and 7TV)

## ⭐ Features

- Fetch for Twitch channel
- Fetch for Twitch emotes  
- Fetch for BetterTTV emotes.
- Fetch for FFZ emotes.
- Fetch for 7TV emotes.

## 🌲 Get started

**__Initialize client__**  

```javascript
const TwitchFetcher = require("twitch-fetcher");

var fetcher = new TwitchFetcher({
    clientId: "01234abcde",
    OAuth: "56789fghij"
});
```

**__Using as ES Module__**

```javascript
import TwitchFetcher from "twitch-fetcher";

let fetcher = new TwitchFetcher({
    clientId: "01234abcde",
    OAuth: "56789fghij"
});
```

## 📖 Documentation

**__Fetch Emotes__**  

```javascript
// By username
await fetcher.getEmotesByName("sammwy", ["7tv", "bttv", "ffz", "twitch"]);

// By ID
await fetcher.getEmotesByID("0123456abcdefg", ["twitch"]);

```

**__Fetch Twitch User__**  

```javascript
// By username
await fetcher.getUserData({username: "sammwy"});

// By ID
await fetcher.getUserData({id: "0123456abcdefg"});
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)