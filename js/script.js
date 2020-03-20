$(document).ready(function() {
	$("body").addClass("js");
	// To allow me to progressively enhance 
	$("body").removeClass("no_js");
	
	// Inserting name, and monsters into story
	
	// Check media query
	var media_size = window.matchMedia("(min-width: 650px)")
	
	// on form submit, run function
	$("#name-in-story-form").submit(function(event) {
		// variables to be altered in text
		var he = "she";
		var him = "her";
		var his = "her";
		var king = "queen";
		var name = $("#name").val();
		var monster = $("#monster").val();
		var ready = false;
		var checked = false;
		// if neither male or female is selected
		if (!$('#male').is(':checked') && !$('#female').is(':checked')) { 
			ready = false;
			$("#male").addClass("error").parent().parent().find("label").addClass("error");
		}
		// if either is selected
		if ($('#male').is(':checked') || $('#female').is(':checked')) { 
			checked = true;
			// if male is selected
			if($('#male').is(':checked')) {
				he = "he";
				him = "him";
				his = "his";
				king = "king";
			}
		}
		
		// if input is valid
		if (name != "" && monster != "" && checked) {
			//if name and monster are not digits
			if (isNaN(name) && isNaN(monster)) {
				ready = true;
			}
		} 
		
		//if name is empty
		if (name == "") {
			$("#name").addClass("error").parent().parent().find("label").addClass("error");
			// if name is digits
		} else if (!isNaN(name)) {
			$("#name").addClass("error").parent().parent().find("label").addClass("error");
		} 
		
		//if monster is empty
		if (monster == "") {
			$("#monster").addClass("error").parent().parent().find("label").addClass("error");
			//if monster is digits
		} else if (!isNaN(monster)) {
			$("#monster").addClass("error").parent().parent().find("label").addClass("error");
		}
		
		// if ready browser supports storage, store variables 
		if (ready) {
			if (typeof(Storage) !== "undefined") {
				localStorage.setItem("him", him);
				localStorage.setItem("his", his);
				localStorage.setItem("firstname", name);
				localStorage.setItem("gender", he);
				localStorage.setItem("monster", monster);
				localStorage.setItem("king", king);
			} else {
		
			}
			// direct to part_one
			location.replace("part_one.html");
		}
		event.preventDefault();
	});
	
	// replace text with variables from form
	$(".novel-content .replace").text(localStorage.getItem("firstname"));
	$(".novel-content .replace_gender").text(localStorage.getItem("gender"));
	$(".novel-content .his").text(localStorage.getItem("his"));
	$(".novel-content .him").text(localStorage.getItem("him"));
	$(".novel-content .king").text(localStorage.getItem("king"));
	$(".novel-content .monster").text(localStorage.getItem("monster"));
	
	
	// remove error class if key down for text input, or mouse down for radio input
	$("#name").keydown(function() {
		$(this).removeClass("error").parent().parent().find("label").removeClass("error");
	});
	$("#monster").keydown(function() {
		$(this).removeClass("error").parent().parent().find("label").removeClass("error");
	});
	
	$("#male").mousedown(function(){
		$(this).removeClass("error").parent().parent().find("label").removeClass("error");
	});
	
	$("#female").mousedown(function(){
		$(this).removeClass("error").parent().parent().find("label").removeClass("error");
	});
	
	// show trees if desktop view
	function show_trees(media_size) {
		if (media_size.matches) {
		$("#trees").css("visibility", "visible");
	}
	}; 
	
	$("#part-two .two-options").fadeOut(1);
	
	show_trees(media_size);
	
	// add css class
	$("#part-two #first-tree").addClass("shorttree");
	$("#part-two #second-tree").addClass("longtree");
	
	
	// ensure trees remain in position, remove animation
	setTimeout(function() {
		$("#part-two #first-tree").css("bottom", "-120px");
		$("#part-two #second-tree").css("bottom", "-80px");
		$("#part-two #first-tree").removeClass("shorttree");
		$("#part-two #second-tree").removeClass("longtree");
	}, 7000);
	
	// on hover add css class to animate, fade in object
	setTimeout(function() {
		$("#part-two #trees").hover(function() {	
			$("#part-two #first-tree").addClass('showanimalsleft');
			$("#part-two #second-tree").addClass('showanimalsright');
			$('#part-two .two-options').fadeIn(2000);
			event.preventDefault();
		});
	}, 7000);
	
	// alter text (progressively enhanced)
	$("#part-two .question h2").text(" Who do you want to take on your journey? Hint: Look behind the trees!")
	
	// remove link attribute (progressively enhanced)
	$("#snake a").removeAttr("href");
	$("#frog a").removeAttr("href");
	
	// on click, toggle class for pop-up
	$("#snake").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-correct");
		event.preventDefault();
	});
	
	// on click, toggle class for pop-u
	$("#frog").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-incorrect");
		event.preventDefault();
	});
	

	// remove link attribute (progressively enhanced)
	$("#boat_two a").removeAttr("href");
	$("#boat_one a").removeAttr("href");
	
	// on click, toggle class for pop-up
	$("#boat_one").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-correct");
		event.preventDefault();
	});
	
	// on click, toggle class for pop-up
	$("#boat_two").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-incorrect");
		event.preventDefault();
	});
	
	
	// remove link attribute (progressively enhanced)
	$("#meal_one a").removeAttr("href");
	$("#meal_two a").removeAttr("href");
	
	// on click, toggle class for pop-up
	$("#meal_one").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-correct");
		$("#meal_one img:last-child").attr('src', 'images/full.gif');
		event.preventDefault();
	});
	
	// on click, toggle class for pop-up
	$("#meal_two").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-incorrect");
		$("#meal_two img:last-child").attr('src', 'images/empty.gif');
		event.preventDefault();
	});
	
	// remove link attribute (progressively enhanced)
	$("#shark a").removeAttr("href");
	$("#fish a").removeAttr("href");
	
	// on click, toggle class for pop-up
	$("#shark").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-correct");
		event.preventDefault();
	});
	// on click, toggle class for pop-up
	$("#fish").click(function(event) {
		$("body").removeClass("show-fun-fact-popup-correct");
		$("body").toggleClass("show-fun-fact-popup-incorrect");
		$("#fish img:last-child").attr('src', 'images/puffa.gif');
		event.preventDefault();
	});
	

	
	// variables set to false for if_clicked
	var first_clicked = false;
	var second_clicked = false;
	var third_clicked = false;

	// Get the eye's elements by Id for later reference 
	var eyes_first = document.getElementById("first_eyes");
	var eyes_second = document.getElementById("second_eyes");
	var eyes_third = document.getElementById("third_eyes");
	
	// replace text (progressively enhanced)
	$("#part-four .question h2").text("Try and click on the monsters eyes!")

	// If element clicked, set boolean to true 
	eyes_first.onclick = function() {
		first_clicked = true;
	};
	
	eyes_second.onclick = function() {
		second_clicked = true;
	};
	
	eyes_third.onclick = function() {
		third_clicked = true;
	};
	
	// Flicker eyes on and off for all three monsters //
	
	function animate_first(media_size) {
		var showing_for = Math.floor((Math.random() * 900) + 1);	
		var hiding_for = Math.floor((Math.random() * 1000) + 1);	
		setTimeout(function() {
			$("#first_eyes").fadeIn(100, function () {
				setTimeout(function() {
					if (first_clicked == true) {
						if (media_size.matches) {
						
							$('#first_eyes + img').css('animation', 'desktop_first_crown 2s linear 0s 1 normal');
							$('#first_eyes + img').css('animation-fill-mode', 'forwards');
							$('#first_eyes + img').css('top', '0px');
							$('#first_eyes + img').css('transform', 'rotateZ(-20deg)');
							return;
						} else {
							$('#first_eyes + img').css('animation', 'mobile_first_crown 2s linear 0s 1 normal');
							$('#first_eyes + img').css('animation-fill-mode', 'forwards');
							$('#first_eyes + img').css('top', '-3px');
							$('#first_eyes + img').css('transform', 'rotateZ(-10deg)');
							return;
						}
						
					}
					$("#first_eyes").fadeOut(100, animate_first(media_size));
				}, showing_for);
			});
		}, hiding_for);
	}
	
	function animate_second(media_size) {
		var showing_for = Math.floor((Math.random() * 900) + 1);	
		var hiding_for = Math.floor((Math.random() * 1000) + 1);	
		setTimeout(function() {
			$("#second_eyes").fadeIn(100, function () {
				setTimeout(function() {
					if (second_clicked == true) {
						if (media_size.matches) {
								$('#second_eyes + img').css('animation', 'desktop_second_crown 2s linear 0s 1 normal');
								$('#second_eyes + img').css('animation-fill-mode', 'forwards');
								$('#second_eyes + img').css('top', '-80px');
								$('#second_eyes + img').css('transform', 'rotateZ(15deg)');
								return;
							} else {
								$('#second_eyes + img').css('animation', 'mobile_second_crown 2s linear 0s 1 normal');
								$('#second_eyes + img').css('animation-fill-mode', 'forwards');
								$('#second_eyes + img').css('top', '-25px');
								$('#second_eyes + img').css('transform', 'rotateZ(20deg)');
								return;
							}
					}
					$("#second_eyes").fadeOut(100, animate_second(media_size));
				}, showing_for);
			});
		}, hiding_for);
	}

	
	function animate_third(media_size) {
		var showing_for = Math.floor((Math.random() * 900) + 1);	
		var hiding_for = Math.floor((Math.random() * 1000) + 1);	
		setTimeout(function() {
			$("#third_eyes").fadeIn(100, function () {
				setTimeout(function() {
					if (third_clicked == true) {
						if (media_size.matches) {
								$('#third_eyes + img').css('animation', 'desktop_last_crown 2s linear 0s 1 normal');
								$('#third_eyes + img').css('animation-fill-mode', 'forwards');
								setTimeout(function() {
									$('#third_eyes + img').css('top', '-10px');
									$('#third_eyes + img').css('transform', 'rotateZ(15deg)');
								}, 2000);
								return;
							} else {
								$('#third_eyes + img').css('animation', 'mobile_last_crown 2s linear 0s 1 normal');
								$('#third_eyes + img').css('animation-fill-mode', 'forwards');
								$('#third_eyes + img').css('top', '-3px');
								$('#third_eyes + img').css('transform', 'rotateZ(20deg)');
								return;
							}
					}
					$("#third_eyes").fadeOut(100, animate_third(media_size));
				}, showing_for);
			});
		}, hiding_for);
	}
	
	// call functions 
	animate_first(media_size);
	animate_second(media_size);
	animate_third(media_size);
	
	
});
