import JsonReader from './JsonReader';
import JsonConverter from './JsonConverter';

document.addEventListener("DOMContentLoaded", function () {
	async () => {
		let url = 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json';
		var json = await JsonReader.getJsonFromUrlAsync(url);
		var html = await JsonConverter.convertJsonToHtmlAsync(json);
		$('.projects__items .row').html(html);
	}
});