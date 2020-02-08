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
        for (var i = 0; i < data.length; i++) {
            out += `<div class="col-md-6" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000" data-aos-delay="100">`;
            out += `<figure class="col-md-2 project">`;
            out += `<img src="${data[i]['gsx$image']['$t']}" alt="project-image"/>`;
            out += `<figcaption>`;
            out += `<h2>${data[i]['gsx$name']['$t']}</h2>`;
            out += `<p>${data[i]['gsx$description']['$t']}</p>`;
            out += `<a href="${data[i]['gsx$url']['$t']}">Перейти</a>`;
            out += `</figcaption>`;
            out += `</figure>`;
            out += `</div>`;
        }
        $(".services .row").html(out).ready(function(){
            $('.services .row').html(out);
        });
    }
});