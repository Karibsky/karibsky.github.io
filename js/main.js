AOS.init();

$('.arrow').click(function() {
    $('html, body').animate({scrollTop:$('#two').position().top}, 2000);
});

$('.right-menu #projects').click(function(){
    $('html, body').animate({scrollTop:$('#three').position().top}, 2000);
});

$('.right-menu #contacts').click(function(){
    $('html, body').animate({scrollTop:$('#four').position().top}, 3000);
});

$('.fa-vk').click(function () {
    window.open("https://vk.com/id252263204");
});

$('.fa-github-alt').click(function () {
    window.open("https://github.com/Karibsky");
});

$('.fa-envelope').click(function () {
    window.open("mailto:defendmax@gmail.com");
});
function SetDate() {
    var today = new Date();
    document.getElementById('end').innerHTML = "Karibsky developer &copy; " + today.getFullYear();
}
SetDate();

$.getJSON("https://spreadsheets.google.com/feeds/list/1gLyy0BKWt8ZbGb_9_Zozk600OUJmkMwDxHOh_leoYVU/od6/public/values?alt=json", 
function(data) {
    data = data['feed']['entry'];
    showProjects(data);
})

function showProjects(data) {
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
    $('.services .row').html(out);
}
