/**
 * @author Harry Stevens
 */

function modals() {

	$('.btn-cyclone').on("click", function() {
		$('#cycloneModal').modal();
	});
	$('.btn-wheel').on("click", function() {
		$('#wheelModal').modal();
	});
	$('.btn-para').on("click", function() {
		$('#paraModal').modal();
	});
}


$(document).ready(function() {
	modals();
});
