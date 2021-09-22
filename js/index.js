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

	$.getJSON("projects.json", function(json) {
		let html = '';
		
		json.projects.map((item, index) => {
			html += `<div class="projects__item col-md-4" data-aos="flip-${index % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${index * 50}">`;
			html += `<figure class="projects__item-figure col-md-4">`;
			html += `<img src="${item['image']}" alt="project image"/>`;
			html += `<figcaption>`;
			item["labels"].split(" ").map(async item => {
				html += `<span class="projects__item-label ${item}">${item}</span>`
			});
			html += `<h2>${item['name']}</h2>`;
			html += `<p>${item['description']}</p>`;
			html += `<a href="${item['url']}">Перейти</a>`;
			html += `</figcaption>`;
			html += `</figure>`;
			html += `</div>`;
		})

		$('.projects__items .row').html(html);
	});
});