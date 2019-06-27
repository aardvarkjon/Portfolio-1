var images = [
	 "img/adog.jpg",
	 "img/bdog.jpg",
	 "img/cdog.jpg",
	 "img/ddog.jpg",
	 "img/edog.jpg"
];
var i = 0;
document.getElementById("slider").src = images[i];
var previous = document.getElementById("previous");
var next = document.getElementById("next");


//changing the source to the photos
function changeNext(){
	if( i < images.length - 1){
		i += 1;
	document.getElementById("slider").src = images[i];
	
} else{
	i = 0;
	document.getElementById("slider").src = images[i];
}
}

function changePrev(){
	if( i > 0){
		i -= 1;
	document.getElementById("slider").src = images[i];
	
} else{
	i = images.length - 1;
	document.getElementById("slider").src = images[i];
}
}
//adding click functionality to my buttons
next.addEventListener("click", changeNext);
previous.addEventListener("click", changePrev);