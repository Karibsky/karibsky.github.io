$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.open-sidebar').on('click tap', () => {
		$('.sidenav').sidenav('open');
	});
});