/* global console: false */


function toggleAllSingles(){
	[].forEach.call( document.querySelectorAll('.single-rotator .app'), function(el) {
		el.classList.toggle("single");
		el.classList.toggle("noanimate");
	});
}

function toggleLink(e){
	e.preventDefault();
	toggleAllSingles();
}

document.addEventListener('DOMContentLoaded', function() {
	console.log("Yo");
	[].forEach.call( document.querySelectorAll('.single-rotator .app'), function(el) {
		el.addEventListener('click', function() {
			toggleAllSingles();
		}, false);
	});
	document.querySelector("#list-sub-toggle").addEventListener("click", toggleLink);

});


