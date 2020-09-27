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

    (() => {
        $.ajax({
            url: 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json',
            dataType: 'json',
            async: true,
            success: function (data) {
                var data = data['feed']['entry'];
                var out = '';
                if (data.length > 0) {
                    $.each(data, function (key, value) {
                        out += `<div class="col-md-4" data-aos="flip-${key % 2 == 0 ? 'left' : 'right'}" data-aos-duration="2000" data-aos-delay="${key * 100}">`;
                        out += `<figure class="col-md-3 project">`;
                        out += `<img src="${value['gsx$image']['$t']}" alt="${value['gsx$name']['$t']} project image"/>`;
                        out += `<figcaption>`;
                        out += `<h2>${value['gsx$name']['$t']}</h2>`;
                        out += `<p>${value['gsx$description']['$t']}</p>`;
                        out += `<a href="${value['gsx$url']['$t']}">Перейти</a>`;
                        out += `</figcaption>`;
                        out += `</figure>`;
                        out += `</div>`;
                    });
                    $('.services .row').html(out);
                }
            }
        });
    })();
});
