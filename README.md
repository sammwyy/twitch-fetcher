# Twitch Fetcher

Fetch for Twitch channel and Emotes. (Includes BTTV, FFZ and 7TV)

## ⭐ Features

- Fetch for Twitch channel
- Fetch for Twitch emotes  
- Fetch for BetterTTV emotes (Using bttv's API)
- Fetch for FFZ emotes (Using ffz's API)
- Fetch for 7TV emotes (Using my own unofficial GQL API for 7TV)

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

**__Fetch 7TV Emotes__**  

```javascript
// By username
await fetcher.getEmotesByName("sammwy", {"7tv": true});

// By ID
await fetcher.getEmotesByID("0123456abcdefg", {"7tv": true});
```

**__Fetch BTTV Emotes__**  

```javascript
// By username
await fetcher.getEmotesByName("sammwy", {bttv: true});

// By ID
await fetcher.getEmotesByID("0123456abcdefg", {bttv: true});
```

**__Fetch FFZ Emotes__** 

```javascript
// By username
await fetcher.getEmotesByName("sammwy", {ffz: true});

// By ID
await fetcher.getEmotesByID("0123456abcdefg", {ffz: true});
```

**__Fetch Twitch Emotes__**  

```javascript
// By username
await fetcher.getEmotesByName("sammwy", {twitch: true});

// By ID
await fetcher.getEmotesByID("0123456abcdefg", {twitch: true});
```

**__Fetch Twitch User__**  

```javascript
// By username
await fetcher.getUserData({username: "sammwy"});

// By ID
await fetcher.getUserData({id: "0123456abcdefg"});
```

## ❤️ Donate

Support all EnhancedTwitch's projects making a Donation in [PayPal](https://paypal.me/sammwy), [Ko-fi](https://ko-fi.com) or [Patreon](https://patreon.com/sammwy)
