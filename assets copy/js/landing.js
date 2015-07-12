/**
 * @author Ashish Kumar
 */
 
    
    var canvas;
    var context;
    
      function setCanvas() {
      
      
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext("2d");
        var pw = canvas.parentNode.clientWidth;
   		var ph = canvas.parentNode.clientHeight;

  		canvas.height = pw * 0.8 * (canvas.height/canvas.width);  
  		canvas.width = pw * 0.8;
  		canvas.style.top = (ph-canvas.height)/2 + "px";
   		canvas.style.left = (pw-canvas.width)/2 + "px";
        var x = canvas.width / 2;
        var y = canvas.height / 2;

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "64pt 'Megrim'";
        context.fillStyle ='black';        
        context.shadowColor="black";
        context.shadowBlur=1;
        context.shadowOffsetX=1;
        context.fillText("AshishKumar.Org", x, y);
        canvas.addEventListener('mousemove', ev_mousemove, false);

        canvas.addEventListener('mouseout',ev_mousemove,false);
        canvas.addEventListener('click', ev_mousemove, false);

        };
        

var started = false;
  function ev_mousemove (ev) {
        var x = canvas.width / 2;
        var y = canvas.height / 2;

        console.log(ev.type);
        switch (ev.type) {
        case "mousemove" :

            context.fillStyle =' #007FFF';
        	context.shadowColor=' #007FFF';
            context.shadowBlur=1;
            context.shadowOffsetX=1;
            context.font = "64pt bold 'Megrim'";    
            context.fillText('AshishKumar.Org', x, y);
            break;
        case "mouseout" :          
            context.fillText('AshishKumar.Org', x, y);
            context.font = "64pt bold 'Megrim'";
            context.shadowBlur=1;
            context.shadowOffsetX=1;
            context.fillStyle ='black';
        	context.shadowColor='black';
        	setCanvas();
           break;   
        case "click": 
           console.log("You Clicked");
           window.location.href='html5.html'
           break;                    
        }
}            
   
  

	    window.onload = setCanvas;
	    window.onresize = setCanvas;
	    setTimeout('setCanvas()',500);
  
    