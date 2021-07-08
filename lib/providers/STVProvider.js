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

var _tv = _interopRequireDefault(require("7tv"));

var SevenTVProvider = /*#__PURE__*/function () {
  function SevenTVProvider() {
    (0, _classCallCheck2["default"])(this, SevenTVProvider);
    this.stv = (0, _tv["default"])();
  }

  (0, _createClass2["default"])(SevenTVProvider, [{
    key: "getEmotesByName",
    value: function () {
      var _getEmotesByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username) {
        var emotes;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.stv.fetchUserEmotes(username);

              case 2:
                emotes = _context.sent;
                return _context.abrupt("return", (0, _EmoteUtils.normalize7TVEmotes)(emotes));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEmotesByName(_x) {
        return _getEmotesByName.apply(this, arguments);
      }

      return getEmotesByName;
    }()
  }]);
  return SevenTVProvider;
}();

exports["default"] = SevenTVProvider;
//# sourceMappingURL=STVProvider.js.map