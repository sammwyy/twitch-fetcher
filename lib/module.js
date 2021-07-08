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

var _BTTVProvider = _interopRequireDefault(require("./providers/BTTVProvider"));

var _FFZProvider = _interopRequireDefault(require("./providers/FFZProvider"));

var _twitchProvider = _interopRequireDefault(require("./providers/twitchProvider"));

var _STVProvider = _interopRequireDefault(require("./providers/STVProvider"));

var TwitchFetcher = /*#__PURE__*/function () {
  function TwitchFetcher() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, TwitchFetcher);
    this.bttvProvider = new _BTTVProvider["default"]();
    this.ffzProvider = new _FFZProvider["default"]();
    this.stvProvider = new _STVProvider["default"]();
    this.twitchProvider = new _twitchProvider["default"](config.twitchClientID, config.twitchOAuth);
  }

  (0, _createClass2["default"])(TwitchFetcher, [{
    key: "getUserData",
    value: function () {
      var _getUserData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, username;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, username = _ref.username;

                if (!username) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this.twitchProvider.getUserByName(username));

              case 5:
                return _context.abrupt("return", this.twitchProvider.getUserByID(id));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserData(_x) {
        return _getUserData.apply(this, arguments);
      }

      return getUserData;
    }()
  }, {
    key: "getEmotesByID",
    value: function () {
      var _getEmotesByID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var config,
            result,
            userdata,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
                  twitch: true
                };
                result = [];

                if (!config.twitch) {
                  _context2.next = 11;
                  break;
                }

                _context2.t0 = [];
                _context2.t1 = (0, _toConsumableArray2["default"])(result);
                _context2.t2 = _toConsumableArray2["default"];
                _context2.next = 8;
                return this.twitchProvider.getEmotesByID(id);

              case 8:
                _context2.t3 = _context2.sent;
                _context2.t4 = (0, _context2.t2)(_context2.t3);
                result = _context2.t0.concat.call(_context2.t0, _context2.t1, _context2.t4);

              case 11:
                if (!config.ffz) {
                  _context2.next = 20;
                  break;
                }

                _context2.t5 = [];
                _context2.t6 = (0, _toConsumableArray2["default"])(result);
                _context2.t7 = _toConsumableArray2["default"];
                _context2.next = 17;
                return this.ffzProvider.getEmotesByID(id);

              case 17:
                _context2.t8 = _context2.sent;
                _context2.t9 = (0, _context2.t7)(_context2.t8);
                result = _context2.t5.concat.call(_context2.t5, _context2.t6, _context2.t9);

              case 20:
                if (!config.bttv) {
                  _context2.next = 29;
                  break;
                }

                _context2.t10 = [];
                _context2.t11 = (0, _toConsumableArray2["default"])(result);
                _context2.t12 = _toConsumableArray2["default"];
                _context2.next = 26;
                return this.bttvProvider.getEmotesByID(id);

              case 26:
                _context2.t13 = _context2.sent;
                _context2.t14 = (0, _context2.t12)(_context2.t13);
                result = _context2.t10.concat.call(_context2.t10, _context2.t11, _context2.t14);

              case 29:
                if (!config["7tv"]) {
                  _context2.next = 41;
                  break;
                }

                _context2.next = 32;
                return this.getUserData({
                  id: id
                });

              case 32:
                userdata = _context2.sent;
                _context2.t15 = [];
                _context2.t16 = (0, _toConsumableArray2["default"])(result);
                _context2.t17 = _toConsumableArray2["default"];
                _context2.next = 38;
                return this.stvProvider.getEmotesByName(userdata.login);

              case 38:
                _context2.t18 = _context2.sent;
                _context2.t19 = (0, _context2.t17)(_context2.t18);
                result = _context2.t15.concat.call(_context2.t15, _context2.t16, _context2.t19);

              case 41:
                return _context2.abrupt("return", result);

              case 42:
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
    key: "getEmotesByName",
    value: function () {
      var _getEmotesByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(username, settings) {
        var _yield$this$getUserDa, id;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getUserData({
                  username: username
                });

              case 2:
                _yield$this$getUserDa = _context3.sent;
                id = _yield$this$getUserDa.id;
                return _context3.abrupt("return", this.getEmotesByID(id, settings));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getEmotesByName(_x3, _x4) {
        return _getEmotesByName.apply(this, arguments);
      }

      return getEmotesByName;
    }()
  }]);
  return TwitchFetcher;
}();

var _default = TwitchFetcher;
exports["default"] = _default;
//# sourceMappingURL=module.js.map