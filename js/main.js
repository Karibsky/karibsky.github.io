$(function() {
    AOS.init({
        useClassNames: false,
        disableMutationObserver: false
    });

    $('#copyright').append(`Karibsky developer &copy; ${(new Date).getFullYear()}`);

    (async () => {
        var arrow = $('#arrow_up');  
        $(window).scroll(function() {     
            $(window).scrollTop() > 300 ? arrow.addClass('show') : arrow.removeClass('show');
         });
         arrow.on('click', function(e) {
           e.preventDefault();
           $('html, body').animate({scrollTop:0}, '300');
         });

         var json = await getJsonFromUrl('https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json');
         await displayProjectsFromJson(json);
    })();

    async function getJsonFromUrl (url) {
        try {
            let result = await $.ajax({
                url,
                dataType: 'json',
                async: true,
            });
            return result;
        } 
        catch (error) {
            console.error(error);
        }
    };

    $('.projects_selector select').on('change', async function() {
        var json = await getJsonFromUrl('https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json');
        await displayProjectsFromJson(json, this.value);
      });

    async function displayProjectsFromJson (data, elementsCount) {
        var data = data['feed']['entry'];
        var out = '';

        if (data.length > 0) {
            var elements = data.slice(0, elementsCount ?? data.length);

            elements.forEach(async (item, i) => {
                out += `<div class="col-md-4" data-aos="flip-${i % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${i * 100}">`;
                out += `<figure class="col-md-4 project">`;
                out += `<img src="${item['gsx$image']['$t']}" alt="${item['gsx$name']['$t']} project image"/>`;
                out += `<figcaption>`;
                item["gsx$labels"]["$t"].split(" ").forEach(async (item) => {
                    out += `<span class="project_label ${item}">${item}</span>`
                });
                out += `<h2>${item['gsx$name']['$t']}</h2>`;
                out += `<p>${item['gsx$description']['$t']}</p>`;
                out += `<a href="${item['gsx$url']['$t']}">Перейти</a>`;
                out += `</figcaption>`;
                out += `</figure>`;
                out += `</div>`;
            });

            $('.services .row').html(out);
            $('.projects_counter p').html(`Всего проектов: ${data.length}`);
        }
    };
});
