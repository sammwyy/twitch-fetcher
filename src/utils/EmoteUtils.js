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