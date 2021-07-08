"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _EmoteUtils = require("../utils/EmoteUtils");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var BTTVProvider = /*#__PURE__*/function () {
  function BTTVProvider() {
    (0, _classCallCheck2["default"])(this, BTTVProvider);
  }

  (0, _createClass2["default"])(BTTVProvider, [{
    key: "sendGetRequest",
    value: function () {
      var _sendGetRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
        var req, body;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _nodeFetch["default"])(url);

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

                return _context.abrupt("return", [].concat((0, _toConsumableArray2["default"])(body.channelEmotes), (0, _toConsumableArray2["default"])(body.sharedEmotes)));

              case 10:
                throw new Error("".concat(body.status, " ").concat(body.error, " - ").concat(body.message));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
                return this.sendGetRequest("https://api.betterttv.net/3/cached/users/twitch/" + id);

              case 2:
                emotes = _context2.sent;
                return _context2.abrupt("return", (0, _EmoteUtils.normalizeBTTVEmotes)(emotes));

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
  return BTTVProvider;
}();

exports["default"] = BTTVProvider;
//# sourceMappingURL=BTTVProvider.js.map