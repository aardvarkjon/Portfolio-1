var total = "";
var input = document.querySelector("input");
var answer = document.getElementById("answer");
var btn = document.querySelector("button");


//accept user input
window.addEventListener("keypress", function(event){
	if(event.keyCode === 13 ){
		var state = document.getElementById("selState").value
		var final = Number(Math.round(input.value * 100)/100);
		var finalAnswer = final * state;
		if(document.getElementById("checkBox").checked){input.value = "";
	
		} else{}
	
	}
		answer.textContent = finalAnswer.toFixed(2);
});


btn.addEventListener("click", function(){
	
		var state = document.getElementById("selState").value
		var final = Number(Math.round(input.value * 100)/100);
		var finalAnswer = final * state;

		if(document.getElementById("checkBox").checked){input.value = "";
	
		} else{}
		answer.textContent = finalAnswer.toFixed(2);
});