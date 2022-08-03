var mouseEvent="empty";
var lastPositionX,lastPositionY;



canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="black";
widthLine:1;

canvas.addEventListener("mouseDown", myMouseDown);

function myMouseDown(e)
{
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove (e)
{
    PositionMouseX= e.clientX - canvas.offsetLeft; 
    PositionMouseY= e.clientY - canvas.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = widthLine;
        ctx.radius = radius;

        console.log("Last position of x and y coordinates= ");
        console.log("x= " + lastPositionX + "y= " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
    
    console.log("Current position of x and y coordinates= ");
    console.log("x= " + positionMouseX + "y= " + positionMouseY);
    ctx.lineTo(PositionMouseX, PositionMouseY);
    ctx.stroke();
    }
}


function clearArea() 
{ 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
