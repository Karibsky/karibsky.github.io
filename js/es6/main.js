import JsonReader from './JsonReader';
import JsonConverter from './JsonConverter';

document.addEventListener("DOMContentLoaded", async function () {
	AOS.init({
		useClassNames: false,
		disableMutationObserver: false
	});

	let currentYear = (new Date).getFullYear();
	$('.copyright').append(`Maxim Nikulin &copy; ${currentYear}`);

	var arrow = $('#arrow_up');
	$(window).scroll(function () {
		$(window).scrollTop() > 300 ? arrow.addClass('show') : arrow.removeClass('show');
	});
	arrow.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	let json = await JsonReader.getJsonFromUrl('https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json');
	let html = await JsonConverter.convertJsonToHtml(json['feed']['entry']);
	$('.projects__items .row').html(html);
});