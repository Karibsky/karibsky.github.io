document.addEventListener("DOMContentLoaded", async function () {
	AOS.init({
		useClassNames: false,
		disableMutationObserver: false,
	});

	$('.copyright').append(`Maxim Nikulin &copy; ${(new Date).getFullYear()}`);

	var arrow = $('#arrow_up');
	$(window).scroll(function () {
		$(window).scrollTop() > 300 ? arrow.addClass('show') : arrow.removeClass('show');
	});
	
	arrow.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	await renderProjectsFromUrl('https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json');
});

async function renderProjectsFromUrl(url) {
	let json = await getJsonFromUrl(url);
	let html = await convertJsonToHtml(json['feed']['entry']);
	$('.projects__items .row').html(html);
}

async function getJsonFromUrl(url) {
	try {
		return Promise.resolve($.ajax({
			url,
			dataType: 'json',
			async: true
		}));
	} 
	catch (error) {
		console.error(error);
	}
}

async function convertJsonToHtml(json) {
	var html = '';

	if (json.length > 0) {
		json.map(async (item, index) => {
			html += `<div class="projects__item col-md-4" data-aos="flip-${index % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${index * 50}">`;
			html += `<figure class="projects__item-figure col-md-4">`;
			html += `<img src="${item['gsx$image']['$t']}" alt="project image"/>`;
			html += `<figcaption>`;
			item["gsx$labels"]["$t"].split(" ").map(async item => {
				html += `<span class="projects__item-label ${item}">${item}</span>`
			});
			html += `<h2>${item['gsx$name']['$t']}</h2>`;
			html += `<p>${item['gsx$description']['$t']}</p>`;
			html += `<a href="${item['gsx$url']['$t']}">Перейти</a>`;
			html += `</figcaption>`;
			html += `</figure>`;
			html += `</div>`;
		})
	}

	return html;
}