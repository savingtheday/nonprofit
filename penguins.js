jQuery(document).ready(function($) {
	$('.my-slider').unslider();
});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
	})
$('#myTabs a[href="#home"]').tab('show') // Select tab by name