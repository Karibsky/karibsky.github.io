'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonConverter = function () {
	function JsonConverter() {
		_classCallCheck(this, JsonConverter);
	}

	_createClass(JsonConverter, null, [{
		key: 'convertJsonToHtmlAsync',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(json) {
				var _this = this;

				var html;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								html = '';


								if (json.length > 0) {
									elements.forEach(function () {
										var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item, i) {
											return regeneratorRuntime.wrap(function _callee2$(_context2) {
												while (1) {
													switch (_context2.prev = _context2.next) {
														case 0:
															out += '<div class="projects__item col-md-4" data-aos="flip-' + (i % 2 == 0 ? 'left' : 'right') + '" data-aos-duration="2000" data-aos-delay="' + i * 100 + '">';
															out += '<figure class="projects__item-figure col-md-4">';
															out += '<img src="' + item['gsx$image']['$t'] + '" alt="' + item['gsx$name']['$t'] + ' project image"/>';
															out += '<figcaption>';
															item["gsx$labels"]["$t"].split(" ").forEach(function () {
																var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
																	return regeneratorRuntime.wrap(function _callee$(_context) {
																		while (1) {
																			switch (_context.prev = _context.next) {
																				case 0:
																					out += '<span class="projects__item-label ' + item + '">' + item + '</span>';

																				case 1:
																				case 'end':
																					return _context.stop();
																			}
																		}
																	}, _callee, _this);
																}));

																return function (_x4) {
																	return _ref3.apply(this, arguments);
																};
															}());
															out += '<h2>' + item['gsx$name']['$t'] + '</h2>';
															out += '<p>' + item['gsx$description']['$t'] + '</p>';
															out += '<a href="' + item['gsx$url']['$t'] + '">\u041F\u0435\u0440\u0435\u0439\u0442\u0438</a>';
															out += '</figcaption>';
															out += '</figure>';
															out += '</div>';

														case 11:
														case 'end':
															return _context2.stop();
													}
												}
											}, _callee2, _this);
										}));

										return function (_x2, _x3) {
											return _ref2.apply(this, arguments);
										};
									}());
								}

								return _context3.abrupt('return', html);

							case 3:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function convertJsonToHtmlAsync(_x) {
				return _ref.apply(this, arguments);
			}

			return convertJsonToHtmlAsync;
		}()
	}]);

	return JsonConverter;
}();

exports.default = JsonConverter;