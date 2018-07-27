


if($( window ).width() >= 600){
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
} else{
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
}
