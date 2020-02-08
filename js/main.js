AOS.init();

(function SetDate() {
    var today = new Date();
    document.getElementById('copyright').innerHTML = "Karibsky developer &copy; " + today.getFullYear();
}());

$.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json',
    dataType: 'json',
    async: true,
    success: function(data) {
        var data = data['feed']['entry'];
        var out = '';
        if(data.length > 0) {
            $.each(data, function(key, value){
                var flip = 'left';
                if(key % 2 == 0)
                    flip = 'right';
                out += `<div class="col-md-4" data-aos="flip-${flip}" data-aos-anchor-placement="bottom" data-aos-duration="2000" data-aos-delay="500">`;
                out += `<figure class="col-md-3 project">`;
                out += `<img src="${value['gsx$image']['$t']}" alt="project-image"/>`;
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