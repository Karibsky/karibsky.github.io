export default class JsonConverter {
	static async convertJsonToHtml(json) {
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
}