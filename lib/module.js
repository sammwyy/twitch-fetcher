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

var _FFZProvider = _interopRequireDefault(require("./providers/FFZProvider"));

var _twitchProvider = _interopRequireDefault(require("./providers/twitchProvider"));

var TwitchFetcher = /*#__PURE__*/function () {
  function TwitchFetcher() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, TwitchFetcher);
    this.ffzProvider = new _FFZProvider["default"]();
    this.twitchProvider = new _twitchProvider["default"](config.twitchClientID, config.twitchOAuth);
  }

  (0, _createClass2["default"])(TwitchFetcher, [{
    key: "getEmotesByID",
    value: function () {
      var _getEmotesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
        var _ref,
            twitch,
            bttv,
            ffz,
            stv,
            result,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                  twitch: true
                }, twitch = _ref.twitch, bttv = _ref.bttv, ffz = _ref.ffz, stv = _ref.stv;
                result = [];

                if (!twitch) {
                  _context.next = 11;
                  break;
                }

                _context.t0 = [];
                _context.t1 = (0, _toConsumableArray2["default"])(result);
                _context.t2 = _toConsumableArray2["default"];
                _context.next = 8;
                return this.twitchProvider.getEmotesByID(id);

              case 8:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);
                result = _context.t0.concat.call(_context.t0, _context.t1, _context.t4);

              case 11:
                if (!ffz) {
                  _context.next = 20;
                  break;
                }

                _context.t5 = [];
                _context.t6 = (0, _toConsumableArray2["default"])(result);
                _context.t7 = _toConsumableArray2["default"];
                _context.next = 17;
                return this.ffzProvider.getEmotesByID(id);

              case 17:
                _context.t8 = _context.sent;
                _context.t9 = (0, _context.t7)(_context.t8);
                result = _context.t5.concat.call(_context.t5, _context.t6, _context.t9);

              case 20:
                return _context.abrupt("return", result);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEmotesByID(_x) {
        return _getEmotesByID.apply(this, arguments);
      }

      return getEmotesByID;
    }()
  }]);
  return TwitchFetcher;
}();

var _default = TwitchFetcher;
exports["default"] = _default;
//# sourceMappingURL=module.js.map