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
	var targetSelector = e.target.hash;

	if(typeof targetSelector === 'undefined'){
		targetSelector = e.target.parentElement.hash;
	}
	console.log(targetSelector);

	var targetContent = document.querySelector(targetSelector);
	console.log(targetContent.innerHTML);
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

