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

var _twitchProvider = _interopRequireDefault(require("./providers/twitchProvider"));

var TwitchFetcher = /*#__PURE__*/function () {
  function TwitchFetcher(config) {
    (0, _classCallCheck2["default"])(this, TwitchFetcher);
    this.twitchProvider = new _twitchProvider["default"](config);
  }

  (0, _createClass2["default"])(TwitchFetcher, [{
    key: "getEmotesByID",
    value: function () {
      var _getEmotesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, _ref) {
        var _ref$twitch, twitch, _ref$bttv, bttv, _ref$ffz, ffz, _ref$stv, stv, result;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$twitch = _ref.twitch, twitch = _ref$twitch === void 0 ? true : _ref$twitch, _ref$bttv = _ref.bttv, bttv = _ref$bttv === void 0 ? false : _ref$bttv, _ref$ffz = _ref.ffz, ffz = _ref$ffz === void 0 ? false : _ref$ffz, _ref$stv = _ref.stv, stv = _ref$stv === void 0 ? false : _ref$stv;
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
                return _context.abrupt("return", result);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEmotesByID(_x, _x2) {
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