'use strict';

var _JsonReader = require('./JsonReader');

var _JsonReader2 = _interopRequireDefault(_JsonReader);

var _JsonConverter = require('./JsonConverter');

var _JsonConverter2 = _interopRequireDefault(_JsonConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
	(async function () {
		var url = 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json';
		var json = await _JsonReader2.default.getJsonFromUrlAsync(url);
		var html = await _JsonConverter2.default.convertJsonToHtmlAsync(json);
		$('.projects__items .row').html(html);
	});
});
