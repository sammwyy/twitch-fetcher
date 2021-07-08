"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _EmoteUtils = require("../utils/EmoteUtils");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var TwitchProvider = /*#__PURE__*/function () {
  function TwitchProvider(_ref) {
    var twitchClientID = _ref.twitchClientID,
        twitchOAuth = _ref.twitchOAuth;
    (0, _classCallCheck2["default"])(this, TwitchProvider);
    this.clientID = twitchClientID;
    this.oauth = twitchOAuth;
  }

  (0, _createClass2["default"])(TwitchProvider, [{
    key: "sendGetRequest",
    value: function () {
      var _sendGetRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
        var req, body;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _nodeFetch["default"])(url, {
                  headers: {
                    "Client-ID": this.twitchClientID,
                    "Authorization": "Bearer " + this.oauth
                  }
                });

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                body = _context.sent;

                if (!req.ok) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", body);

              case 10:
                throw new Error("".concat(body.status, " ").concat(body.error, " - ").concat(body.message));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendGetRequest(_x) {
        return _sendGetRequest.apply(this, arguments);
      }

      return sendGetRequest;
    }()
  }, {
    key: "getEmotesByID",
    value: function () {
      var _getEmotesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var emotes;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.sendGetRequest("https://api.twitch.tv/helix/chat/emotes?broadcaster_id=" + id);

              case 2:
                emotes = _context2.sent;
                return _context2.abrupt("return", (0, _EmoteUtils.normalizeTwitchEmotes)(emotes));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getEmotesByID(_x2) {
        return _getEmotesByID.apply(this, arguments);
      }

      return getEmotesByID;
    }()
  }]);
  return TwitchProvider;
}();

exports["default"] = TwitchProvider;
//# sourceMappingURL=TwitchProvider.js.map