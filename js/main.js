/* global console: false */


function toggleAllSingles(){
	[].forEach.call( document.querySelectorAll('.single-rotator .app'), function(el) {
		el.classList.toggle("single");
		el.classList.toggle("noanimate");
	});
}

function closeModal(e){
	e.preventDefault();
	document.querySelector('#modal').classList.add("hidden");
}

function toggleLink(e){
	e.preventDefault();
	toggleAllSingles();
}
function launchModal(e){
	e.preventDefault();
	console.log(e);
	console.log(e.target.hash);
	var targetContent = document.querySelector(e.target.hash);
	console.log(targetContent);
	document.querySelector("#modal-content").innerHTML = targetContent.innerHTML;
	document.querySelector('#modal').classList.remove("hidden");

}

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call( document.querySelectorAll('.single-rotator .app'), function(el) {
		el.addEventListener('click', function() {
			toggleAllSingles();
		}, false);
	});
	[].forEach.call( document.querySelectorAll('.modal-toggle'), function(el) {
		el.addEventListener('click', launchModal, false);
	});
	document.querySelector("#list-sub-toggle").addEventListener("click", toggleLink);
	document.querySelector("#modal-box .close").addEventListener("click", closeModal);

});

