$(document).ready(function(){

	// Get each li
	var bubbles = $("ul li")

	//place and move bubbles
	bubbles.each(function(i,bubble){ //place bubbles at specific starting pos
		$(this).css('top', i)
		$(this).css('left',i*150)
	})	

	bubbles	//add active class, get them moving, pause and unpause
		.addClass('active')
		.each(function(i,bubble){
				float($(bubble))
			})
		.hover(function(){
				$(this).stop(true)
			},function(){
				float($(this))
	})
	
})

function getCoords() { //return random [x,y] coords in window
	x = Math.random()*($(window).height()-100)
	y = Math.random()*($(window).width()-100)
	return [x,y]
}

function float(bubble){ //set bubble to random new location at random speed, repeat
	pos=getCoords()
	speed =  (Math.random()*4+4)*1000 //range between 4000 and 8000

	bubble.animate({
			top: pos[0] +"px",
			left: pos[1]+"px"
			}, speed,"linear",function(){
				
				float(bubble) 
		})
}