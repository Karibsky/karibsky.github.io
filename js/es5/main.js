'use strict';

var _JsonReader = require('./JsonReader');

var _JsonReader2 = _interopRequireDefault(_JsonReader);

var _JsonConverter = require('./JsonConverter');

var _JsonConverter2 = _interopRequireDefault(_JsonConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

document.addEventListener("DOMContentLoaded", function () {
	var _this = this;

	_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var url, json, html;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						url = 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json';
						_context.next = 3;
						return _JsonReader2.default.getJsonFromUrlAsync(url);

					case 3:
						json = _context.sent;
						_context.next = 6;
						return _JsonConverter2.default.convertJsonToHtmlAsync(json);

					case 6:
						html = _context.sent;

						$('.projects__items .row').html(html);

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));
});