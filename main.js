canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
color="pink";
width=2;
var last_x,last_y;
 canvas.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
     color=document.getElementById("color").value;
 console.log(color);
 

 mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     color=document.getElementById("color").value;
 console.log(color);
 

 mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    color=document.getElementById("color").value;
console.log(color);


mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
last_x=currentx;
last_y=currenty;

}