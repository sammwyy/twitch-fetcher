# Twitch Fetcher

Fetch for Twitch channel and Emotes. (Includes BTTV, FFZ and 7TV)

## ⭐ Features

- Fetch for 7TV emotes.
- Fetch for Twitch emotes.
- Fetch for BetterTTV emotes.
- Fetch for FrankerFaceZ emotes.

## 🌲 Get started

**__Initialize client__**  

```javascript
const TwitchFetcher = require("twitch-fetcher");

const fetcher = new TwitchFetcher({
    auth: {
        accessToken: "01234abcde",
        clientId: "01234abcde"
    }
});
```

**__Using as ES Module__**

```javascript
import TwitchFetcher from "twitch-fetcher";

const fetcher = new TwitchFetcher({
    auth: {
        accessToken: "01234abcde",
        clientId: "01234abcde"
    }
});
```

## 📖 Documentation

**__Fetch Emotes__**  

```javascript
// By username
await fetcher.getEmotesByUsername("sammwy", ["7tv", "bttv", "ffz", "twitch"]);
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)