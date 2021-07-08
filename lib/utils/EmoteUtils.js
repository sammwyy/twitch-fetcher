"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeCDN = normalizeCDN;
exports.normalizeTwitchEmotes = normalizeTwitchEmotes;
exports.normalizeFFZEmotes = normalizeFFZEmotes;
exports.normalizeBTTVEmotes = normalizeBTTVEmotes;
exports.normalize7TVEmotes = normalize7TVEmotes;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CDN = {
  twitch: {
    v1: {
      low: "https://static-cdn.jtvnw.net/emoticons/v1/{id}/1.0",
      medium: "https://static-cdn.jtvnw.net/emoticons/v1/{id}/2.0",
      high: "https://static-cdn.jtvnw.net/emoticons/v1/{id}/3.0"
    },
    v2: {
      low: "https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/1.0",
      medium: "https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/2.0",
      high: "https://static-cdn.jtvnw.net/emoticons/v2/{id}/default/dark/3.0"
    }
  },
  ffz: {
    v1: {
      low: "https://cdn.frankerfacez.com/emote/{id}/1",
      medium: "https://cdn.frankerfacez.com/emote/{id}/2",
      high: "https://cdn.frankerfacez.com/emote/{id}/4"
    }
  },
  bttv: {
    v1: {
      low: "https://cdn.betterttv.net/emote/{id}/1x",
      medium: "https://cdn.betterttv.net/emote/{id}/2x",
      high: "https://cdn.betterttv.net/emote/{id}/3x"
    }
  },
  "7tv": {
    v1: {
      low: "https://cdn.7tv.app/emote/{id}/1x",
      medium: "https://cdn.7tv.app/emote/{id}/2x",
      high: "https://cdn.7tv.app/emote/{id}/4x"
    }
  }
};

function getCDN(type, isV2) {
  return isV2 ? CDN[type]["v2"] : CDN[type]["v1"];
}

function normalizeCDN(id, type) {
  var cdn = getCDN(type, id.startsWith("emotesv2_"));
  return {
    low: cdn.low.replace("{id}", id),
    medium: cdn.medium.replace("{id}", id),
    high: cdn.high.replace("{id}", id)
  };
}

function normalizeTwitchEmotes(emotes) {
  var emotesParsed = [];

  var _iterator = _createForOfIteratorHelper(emotes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var emote = _step.value;
      emotesParsed.push({
        type: "twitch",
        id: emote.id,
        code: emote.name,
        owner: emote.id,
        cdn: normalizeCDN(emote.id, "twitch")
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return emotesParsed;
}

function normalizeFFZEmotes(sets) {
  var emotes = [];
  var setIds = Object.keys(sets || {});

  for (var _i = 0, _setIds = setIds; _i < _setIds.length; _i++) {
    var setId = _setIds[_i];
    var emoticons = sets[setId].emoticons;

    var _iterator2 = _createForOfIteratorHelper(emoticons),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var emote = _step2.value;
        emotes.push({
          type: "ffz",
          id: emote.id,
          code: emote.name,
          owner: emote.owner.name,
          cdn: normalizeCDN(emote.id + "", "ffz")
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return emotes;
}

function normalizeBTTVEmotes(emotes) {
  var emotesParsed = [];

  var _iterator3 = _createForOfIteratorHelper(emotes),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var emote = _step3.value;
      emotesParsed.push({
        type: "bttv",
        id: emote.id,
        code: emote.code,
        owner: emote.user ? emote.user.name : "global",
        cdn: normalizeCDN(emote.id, "bttv")
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return emotesParsed;
}

function normalize7TVEmotes(emotes) {
  var emotesParsed = [];

  var _iterator4 = _createForOfIteratorHelper(emotes),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var emote = _step4.value;
      emotesParsed.push({
        type: "7tv",
        id: emote.id,
        code: emote.name,
        owner: emote.owner_id,
        cdn: normalizeCDN(emote.id, "7tv")
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return emotesParsed;
}
//# sourceMappingURL=EmoteUtils.js.map