// var modal = document.querySelectorAll(".modal");
// var image = document.querySelectorAll(".image");


// function enlarge(){
// 	image.classList.toggle("modalOff");
// 	modal.classList.toggle("modalOn");
// }
// for(i = 0; i < image.length; i++){
// image[i].addEventListener("mouseenter", enlarge);
// }
// for(i = 0; i < modal.length; i++){
// modal[i].addEventListener("mouseleave", enlarge);
// }




$(".image").mouseover(
	function (event){
	$(".modal").toggleClass("modalOn");
	$(".modal").toggleClass("modalOff");
	$(".modal").attr("src", $(this).attr("src"))
	
});

$(".image").mouseout(function (){
	$(".modal").toggleClass("modalOn");
	$(".modal").toggleClass("modalOff");
	
})


$(".image").mousemove(function(event){
	
	$(".modalOn").css({left:event.pageX, top:event.pageY})
	
})

$(".image").click(function (){
	$(".clickModal").toggleClass("clickModalOn");
	$(".click").toggleClass("clickModalBackgroundOn");
	$(".clickModal").attr("src", $(this).attr("src"))
})
$(".clickModal").click(function(){
	$(".click").toggleClass("clickModalBackgroundOn");
	$(".clickModal").toggleClass("clickModalOn");
	$(".clickModal").attr("src", "")
})