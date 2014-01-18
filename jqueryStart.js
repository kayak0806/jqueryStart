$(document).ready(function(){

	// Get each li
	var bubbles = $("ul li")

	//place and move bubbles
	bubbles.each(function(i,bubble){ //place bubbles at specific starting pos
		$(this).css('top', $("#header").height())
		$(this).css('left',i*150)
	})	

	bubbles	//add active class, get them moving, pause and unpause
		.addClass('active')
		.each(function(i,bubble){
				float($(bubble))
		})
		.hover(function(){
				$(this).toggleClass('active')
				$(this).stop()
			},function(){
				$(this).toggleClass('active')
				float($(this))
		})

	// Get buttons
	var buttons = $("#header p")

	// Set buttons
	buttons
	.each(function(button){
		$(this).click(function(){
			name = $(this).text()
			selected = $("#field #"+name+" li")

			selected
				.stop()
				.toggleClass('active')
				.toggleClass('lineup')
			lineup()
			selected.each(function(){
					float($(this))
				})
		})})
	// .hover(function(){
	// 	name = $(this).text()
	// 	selected = $("#field #"+name+" li")
	// 	selected.css('background-color','#5BD200')
	// 	},
	// 	function(){
	// 		name = $(this).text()
	// 		selected = $("#field #"+name+" li")
	// 		selected.css('background-color','#0A64A4')
	// 	}
	// )
})

function getCoords() { //return random [x,y] coords in window
	headerHeight = $("#header").height()
	x = Math.round(Math.random()*($(window).height()-headerHeight-102)+headerHeight)
	y = Math.round(Math.random()*($(window).width()-102)	)
	return [x,y]
}

function float(bubble){ //set bubble to random new location at random speed, repeat
	pos=getCoords()
	speed =  9000//(Math.random()*4+4)*1000 //range between 4000 and 8000

	if (bubble.hasClass('active')){
	bubble.animate({
			top: pos[0] +"px",
			left: pos[1]+"px"
			}, speed,"linear",function(){
				
				float(bubble) 
		})
	}
}

function lineup(){
	lineupList = $('.lineup')
	lineupList.each(function(i){
		
		$(this).animate({
			top: "90px",
			left: i*101+"px"
		})

	})



}