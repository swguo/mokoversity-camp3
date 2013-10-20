

var gameModule = (function(){
var timeOutvar,
	ballx,
	bally,
	ballR,
	scores;
	count = 0;

	function print(){
		console.log('final scores: '+scores);
		//console.log('end');
	}
	function RGB2HTML(red, green, blue)
	{
	    var decColor = red + 256 * green + 65536 * blue;
	    return "#"+decColor.toString(16);
	}
	
	function start(){
		scores = 0;
		document.getElementById("main").addEventListener("click",touchEvent,false);
		
		startGame();
	}
	function touchEvent(evt){

		var x = evt.clientX,
			y = evt.clientY;

			console.log("click");

			var temp = (ballx-x)*(ballx-x)+(bally-y)*(bally-y);

				if(temp<ballR*ballR){
					scores = scores + (100-ballR);

					console.log("scores : "+ scores);
					ctx.clearRect(0, 0, canvas.width, canvas.height);

				// Restore the transform
				ctx.restore();

				}
				
		
	}

	function startGame(){

		
	canvas = document.getElementById('game');
	canvas.width = 500;
	canvas.height = 500;


		var r=Math.floor(Math.random()*255);
		var g=Math.floor(Math.random()*255);
		var b=Math.floor(Math.random()*255);
		console.log(RGB2HTML(r,g,b));
		var c=RGB2HTML(r,g,b);
		 ballx = Math.floor(Math.random()*300);
		 bally = Math.floor(Math.random()*500);
		 ballR = Math.floor(Math.random()*100);
 		ctx = canvas.getContext('2d');

	  		
	  		ctx.fillStyle = c;
	  		
	  		ctx.beginPath();
	  		ctx.arc(ballx,bally,ballR,0,Math.PI*2,true);
	  		ctx.fill();

	  		if(count>=10){

				print();

		  	}else{

		  		timeOutvar = setTimeout(startGame,1000);

		  		count = count+1;
		  		//console.log("Counter: " + count);
		  	}

	  	
	  	}

	  	

	  	return{

	  		
	  		start: start
	  	}

})();

gameModule.start();










var getfrontcolor=(function(){

	function start(){

	var c=document.getElementById("frant");
	var ctx=c.getContext("2d");
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.font="30px Arial";
	ctx.fillText("by 士煒",10,50);

	timeOutvar = setTimeout(start,1000);

	}
	return{

		start:start

	}
})();

getfrontcolor.start();

