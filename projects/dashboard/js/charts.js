function drawVisitsChart() {
	var ctx = document.getElementById('visitsChart').getContext('2d');
	new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
			"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			datasets: [{
				data: ['0', '4361 ', '19347', '29830' , '22700', '31108' , '56177' , '41050' , '56018', '50334', '83817', '61879'],
				borderColor: '#5276df',
				pointRadius: 5,
				pointHoverRadius: 6,
				pointBackgroundColor: '#5276df',
				fill: false
			}],
		},
		options: {
			legend: {
				display: false
			},
			scales : {
				xAxes : [{
					gridLines : {
						display : false
					}
				}],
			}, 
		}
	});
}

function drawDevicesChart() {
	var ctx = document.getElementById('devicesChart').getContext('2d');
	new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ['Реклама', 'Соцсети', 'Рефералы'],
			datasets: [{
				data: [68, 24, 8],
				backgroundColor: ['#5276df', '#0bc888', '#f6c136'], 
			}],
		},
		options: {
			responsive: true,
			legend: {
				display: true,
				position: "bottom",
				labels: {
					boxWidth: 15,
					fontSize: 14
				}
			},
			animation: {
				animateRotate: true,
				animateScale: true
			},
			cutoutPercentage: 75,
		}
	});
}


document.addEventListener("DOMContentLoaded", function(event) { 
	drawVisitsChart();
	drawDevicesChart();
});