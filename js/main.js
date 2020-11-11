$(function() {
    AOS.init({
        useClassNames: false,
        disableMutationObserver: false
    });

    $('#copyright').append(`Karibsky developer &copy; ${(new Date).getFullYear()}`);

    (() => {
        var arrow = $('#arrow_up');  
        $(window).scroll(function() {     
            $(window).scrollTop() > 300 ? arrow.addClass('show') : arrow.removeClass('show');
         });
         arrow.on('click', function(e) {
           e.preventDefault();
           $('html, body').animate({scrollTop:0}, '300');
         });
    })();

    (async () => {
        $.ajax({
            url: 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json',
            dataType: 'json',
            async: true,
            success: function (data) {
                fillProjectsFromResult(data);
            },
            error: function (e) {
                throw new Error(e);
            }
        });
    })();

    function fillProjectsFromResult(data) {
        var data = data['feed']['entry'];
        var out = '';
        if (data.length > 0) {
            data.forEach(function(item, i){
                out += `<div class="col-md-4" data-aos="flip-${i % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${i * 100}">`;
                out += `<figure class="col-md-4 project">`;
                out += `<img src="${item['gsx$image']['$t']}" alt="${item['gsx$name']['$t']} project image"/>`;
                out += `<figcaption>`;
                item["gsx$labels"]["$t"].split(" ").forEach(function(item) {
                    var labelColor = getLabelBackgroundByTechnologyName(item);
                    out += `<span class="project_label" style="border-bottom: 1px solid ${labelColor};">${item}</span>`
                });
                out += `<h2>${item['gsx$name']['$t']}</h2>`;
                out += `<p>${item['gsx$description']['$t']}</p>`;
                out += `<p class="project_labels">`
               
                out += `</p>`;
                out += `<a href="${item['gsx$url']['$t']}">Перейти</a>`;
                out += `</figcaption>`;
                out += `</figure>`;
                out += `</div>`;
            });
            $('.services .row').html(out);
        }
    };

    function getLabelBackgroundByTechnologyName(technologyName) {
        switch(technologyName)
        {
            case 'scss':
                return "#dba0c6";
            case 'css':
                return "#264de4";
            case 'html':
                return "#e34c26";
            case 'js':
                return "#f7e018";
            case 'sql':
                return "#0277bd";
            case 'php':
                return "#787CB5";
            case 'c#':
                return "#690080";
        }
    }
});
