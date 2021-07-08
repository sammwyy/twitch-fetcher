const CDN = {
    twitch: {
        v1: {
            low: `https://static-cdn.jtvnw.net/emoticons/v1/{id}/1.0`,
            medium: `https://static-cdn.jtvnw.net/emoticons/v1/{id}/2.0`,
            high: `https://static-cdn.jtvnw.net/emoticons/v1/{id}/3.0`,
        },

        v2: {
            low: `https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/1.0`,
            medium: `https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/2.0`,
            high: `https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/3.0`,
        }
    },

    ffz: {
        v1: {
            low: `https://cdn.frankerfacez.com/emote/{id}/1`,
            medium: `https://cdn.frankerfacez.com/emote/{id}/2`,
            high: `https://cdn.frankerfacez.com/emote/{id}/4`
        }
    },

    bttv: {
        v1: {
            low: `https://cdn.betterttv.net/emote/{id}/1x`,
            medium: `https://cdn.betterttv.net/emote/{id}/2x`,
            high: `https://cdn.betterttv.net/emote/{id}/3x`
        }
    }
}

function getCDN (type, isV2) {
    return isV2 ? CDN[type]["v2"] : CDN[type]["v1"]
}

export function normalizeCDN (id, type) {
    const cdn = getCDN(type, id.startsWith("emotesv2_"));

    return {
        low: cdn.low.replace("{id}", id),
        medium: cdn.medium.replace("{id}", id),
        high: cdn.high.replace("{id}", id)
    }
}

export function normalizeTwitchEmotes (emotes) {
    let emotesParsed = [];

    for (let emote of emotes) {
        emotesParsed.push({
            type: "twitch",
            id: emote.id,
            code: emote.name,
            owner: emote.id,
            cdn: normalizeCDN(emote.id, "twitch")
        })
    }

    return emotesParsed;
}

export function normalizeFFZEmotes (sets) {
    let emotes = [];
    let setIds = Object.keys(sets || {});

    for (let setId of setIds) {
        let { emoticons } = sets[setId];
        for (let emote of emoticons) {
            emotes.push({
                type: "ffz",
                id: emote.id,
                code: emote.name,
                owner: emote.owner.name,
                cdn: normalizeCDN(emote.id + "", "ffz")
            });
        }
    }

    return emotes;
}

export function normalizeBTTVEmotes(emotes) {
    let emotesParsed = [];

    for (let emote of emotes) {
        emotesParsed.push({
            type: "bttv",
            id: emote.id,
            code: emote.code,
            owner: emote.user ? emote.user.name : "global",
            cdn: normalizeCDN(emote.id, "bttv")
        })
    }

    return emotesParsed;
}