export default class JsonConverter {
	static async convertJsonToHtmlAsync(json) {
		var html = '';

		if (json.length > 0) {
			elements.forEach(async (item, i) => {
				out += `<div class="projects__item col-md-4" data-aos="flip-${i % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${i * 100}">`;
				out += `<figure class="projects__item-figure col-md-4">`;
				out += `<img src="${item['gsx$image']['$t']}" alt="${item['gsx$name']['$t']} project image"/>`;
				out += `<figcaption>`;
				item["gsx$labels"]["$t"].split(" ").forEach(async (item) => {
					out += `<span class="projects__item-label ${item}">${item}</span>`
				});
				out += `<h2>${item['gsx$name']['$t']}</h2>`;
				out += `<p>${item['gsx$description']['$t']}</p>`;
				out += `<a href="${item['gsx$url']['$t']}">Перейти</a>`;
				out += `</figcaption>`;
				out += `</figure>`;
				out += `</div>`;
			});
		}

		return html;
	}
}