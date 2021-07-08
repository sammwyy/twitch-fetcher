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
  function TwitchProvider(clientID, twitchOAuth) {
    (0, _classCallCheck2["default"])(this, TwitchProvider);
    this.clientID = clientID;
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
                if (!(this.clientID == null)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("Twitch Client ID cannot be null.");

              case 4:
                if (!(this.oauth == null)) {
                  _context.next = 6;
                  break;
                }

                throw new Error("Twitch OAuth cannot be null.");

              case 6:
                _context.next = 8;
                return (0, _nodeFetch["default"])(url, {
                  headers: {
                    "Client-ID": this.clientID,
                    "Authorization": "Bearer " + this.oauth
                  }
                });

              case 8:
                req = _context.sent;
                _context.next = 11;
                return req.json();

              case 11:
                body = _context.sent;

                if (!req.ok) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", body.data);

              case 16:
                throw new Error("".concat(body.status, " ").concat(body.error, " - ").concat(body.message));

              case 17:
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
  }, {
    key: "getUserByID",
    value: function () {
      var _getUserByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.sendGetRequest("https://api.twitch.tv/helix/users?id=" + id);

              case 2:
                user = _context3.sent;
                return _context3.abrupt("return", user[0]);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserByID(_x3) {
        return _getUserByID.apply(this, arguments);
      }

      return getUserByID;
    }()
  }, {
    key: "getUserByName",
    value: function () {
      var _getUserByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(username) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.sendGetRequest("https://api.twitch.tv/helix/users?login=" + username);

              case 2:
                user = _context4.sent;
                return _context4.abrupt("return", user[0]);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserByName(_x4) {
        return _getUserByName.apply(this, arguments);
      }

      return getUserByName;
    }()
  }]);
  return TwitchProvider;
}();

exports["default"] = TwitchProvider;
//# sourceMappingURL=TwitchProvider.js.map