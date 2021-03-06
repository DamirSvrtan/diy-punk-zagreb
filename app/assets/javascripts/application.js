// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require venue_maps
//= require waypoints
//= require waypoints-sticky

$(document).ready(function(){

var navigation_links = ["next-show", "future-shows", "venues", "about"];

	navigation_links.forEach(
		function(navigation_link){	
			 $('a[href=#'+ navigation_link+"]").click(function(e){

				 var name = $(this).attr('href').substr(1);
				 var pos = $('.'+ name + '-fluid').offset();

				window.location.hash = "#"+navigation_link;

				 $('body').animate({ scrollTop: pos.top - 55 });
				 e.preventDefault();
			 });
		}
	);

	  $('.navigation').waypoint('sticky');


	  if (window.location.hash != ""){
	  	$('a[href='+ window.location.hash+']').trigger('click');
	  	$('.navigation-link a').removeClass('ci-selected');
	  	$('a[href='+window.location.hash+']').addClass('ci-selected');
	  }

	  $('.navigation-link').on('click', function(){
	  	$('.navigation-link a').removeClass('ci-selected');
	  	$(this).children('a').addClass('ci-selected');
	  })

	  $(window).on('mousewheel', function(){
	  	$('.navigation-link a').removeClass('ci-selected');
	  });



	//   $('.location-sort').on('click', function(e){
	//   	e.preventDefault();
	//   	var all_rows = $('.future-shows tbody tr')
	//   	$('.future-shows tbody').append($(all_rows).sort(SortByLocation))
	//   })


	//   $('.start-time-sort').on('click', function(e){
	//   	e.preventDefault();
	//   	var all_rows = $('.future-shows tbody tr')
	//   	$('.future-shows tbody').append($(all_rows).sort(SortByStartTime))
	//   })

	// function SortByLocation(b, a){
 //  		var aName = $(a).children('.location').text().toLowerCase();
 //  		var bName = $(b).children('.location').text().toLowerCase();
 //  		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	// }

	// function SortByStartTime(b, a){
 //  		var aName = $(a).children('.start-time').text().toLowerCase();
 //  		var bName = $(b).children('.start-time').text().toLowerCase();
 //  		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	// }
});
