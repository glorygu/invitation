var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight/2;



var drawRectangle = function(x, y, w, h, border){
  ctx.lineJoin = "round";
ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.moveTo(x+border, y);
  ctx.lineTo(x+w-border, y);
  ctx.quadraticCurveTo(x+w-border, y, x+w, y+border);
  ctx.lineTo(x+w, y+h-border);
  ctx.quadraticCurveTo(x+w, y+h-border, x+w-border, y+h);
  ctx.lineTo(x+border, y+h);
  ctx.quadraticCurveTo(x+border, y+h, x, y+h-border);
  ctx.lineTo(x, y+border);
  ctx.quadraticCurveTo(x, y+border, x+border, y);
  ctx.closePath();
  ctx.stroke();
}
var neonRect = function(x,y,w,h,r,g,b){
ctx.shadowColor = "rgb("+r+","+g+","+b+")";
ctx.shadowBlur = 10;
ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
ctx.lineWidth=7.5;
drawRectangle(x,y,w,h,1.5);
ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
ctx.lineWidth=6;
drawRectangle(x,y,w,h,1.5);
ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
ctx.lineWidth=4.5;
drawRectangle(x,y,w,h,1.5);
ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
ctx.lineWidth=3;
drawRectangle(x,y,w,h,1.5);
ctx.strokeStyle= '#fff';
ctx.lineWidth=1.5;
drawRectangle(x,y,w,h,1.5);
};

function draw(x, y){
neonRect(25+x,25+y,50,50,243,243,21);
/*neonRect(225-x,25+y,50,50,193,253,51);
neonRect(25+x,225-y,50,50,255,153,51);
neonRect(225-x,225-y,50,50,252,90,184);
neonRect(125,125,50,50,13,213,252); 
*/ 
}
var x =0;
var y = 0;
function loop(){
  x+= 2;
  y += 2;
  if(x>=300){x=-50;y=-50}
  ctx.clearRect(0,0,300,300);
  draw(x, y);
  requestAnimationFrame(loop);
}
//draw(x,y);
//requestAnimationFrame(loop);


function drawCircle(x, y, radius, startAng, endAng){
  ctx.beginPath(); 
  ctx.arc(x, y, radius, startAng, endAng);
  //ctx.closePath();
  //ctx.lineWidth = lineWidth;
  //ctx.strokeStyle = '#003300';

  ctx.stroke();

}

function drawColorCircle(x,y,radius, startAng, endAng, color){
  ctx.strokeStyle= color;
  ctx.lineWidth=7.5;
  drawCircle(x,y,radius,startAng,endAng);

}

function drawNeonCircle(x, y, radius, startAng, endAng, r, g, b)
{
  ctx.shadowColor = "rgb("+r+","+g+","+b+")";
  ctx.shadowBlur = 10;
  ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ctx.lineWidth=7.5;
  drawCircle(x, y, radius, startAng, endAng);
  ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ctx.lineWidth=6;
  drawCircle(x, y, radius, startAng, endAng);
  ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ctx.lineWidth=4.5;
  drawCircle(x, y, radius, startAng, endAng);
  ctx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ctx.lineWidth=3;
  drawCircle(x, y, radius, startAng, endAng);
  ctx.strokeStyle= '#fff';
  ctx.lineWidth=1.5;
  drawCircle(x, y, radius, startAng, endAng);


}

function drawNeonCircleByColor(x, y, radius, startAng, endAng, color)
{
  switch(color)
  {
    case 'yellow':
      drawNeonCircle(x, y, radius, startAng, endAng,243,243,21);
    break; 
    case 'green':
      drawNeonCircle(x, y, radius, startAng, endAng, 193,253,51);
    break;
    case 'orange':
      drawNeonCircle(x, y, radius, startAng, endAng,255,153,51);
    break;
    case 'pink':
      drawNeonCircle(x, y, radius, startAng, endAng,252,90,184);
    break;
    case 'blue':
      drawNeonCircle(x, y, radius, startAng, endAng,13,213,252);
    break;
    case 'black':
      drawNeonCircle(x, y, radius, startAng, endAng,0,0,0);
    break;


  }  
}
var text = "4 NOV 2017";
function spinningWheel(){



var startAng = 1.4;
var endAng = 1.9;

rotatingCircle(startAng, endAng);

}
var colors = ['pink', 'yellow', 'orange', 'blue', 'green'];
var color = 'pink';
function rotatingCircle(startAng, endAng){
  
  var fun = setInterval(function(){
    startAng = checkAngle(startAng);
    endAng = checkAngle(endAng);
    if (endAng >= 3.4)
    {
      color = colors[Math.floor(Math.random()*colors.length)];
      //console.log('color'+color);
    }
    drawNeonCircleByColor((width/2),200,100,Math.PI*(startAng-0.2), Math.PI*endAng, 'black');

    //ctx.shadowColor ="0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0077, 0 0 30px #ff0077, 0 0 40px #ff0077, 0 0 55px #ff0077, 0 0 75px #ff0077";
    
    ctx.font = "1em Quicksand";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#907E96";
  ctx.fillText(text, (width/2)-85, 200);
    drawNeonCircleByColor((width/2),200,100,Math.PI*startAng, Math.PI*endAng, color);}, 20);
  


}
function checkAngle(angle){
  if(angle>=3.5)
  {
    angle = 1.5;
  }
  else 
  {
    angle += 0.1;
  }
  //console.log(angle);
  return angle;
}
/*
drawNeonCircleByColor(200,200,100,Math.PI*1.5, Math.PI*1.8, 'blue');
//drawNeonCircleByColor(200,200,100,Math.PI*1.6, Math.PI*1.9, 'green');
drawNeonCircleByColor(200,200,100,Math.PI*1.7, Math.PI*2.0, 'yellow');
drawNeonCircleByColor(200,200,100,Math.PI*1.8, Math.PI*2.1, 'blue');
drawNeonCircleByColor(200,200,100,Math.PI*1.9, Math.PI*2.2, 'pink');
//drawCircle(200,200,100,Math.PI*1.5, Math.PI*3.5, '#000000', 10);
*/

function changeScaleHeadings(numScale)
{
  var h1 = document.getElementsByTagName("h1");
  var h2 = document.getElementsByTagName("h2");
  for (var item in h1)
  {
    item.style.transform = "scale("+numScale+","+numScale+")";
  }
  for (var item in h2)
  {
    item.style.transform = "scale("+numScale+","+numScale+")";
  }
}
var increase = false;
function checkScale(numScale)
{
  
  if(numScale >= 1)
  {
    //numScale -= 0.01;
    increase = false; 
  }
  else if(numScale < 0.95)
  {
    increase = true;
    //numScale += 0.05;
  }
  
  if(increase==true)
  {
    numScale+=0.01;
  }
  else
  {
    numScale-=0.01;
  }
    
  console.log(numScale);
  return numScale;
}
var scaleNumber = 1;
function scaleHeadings()
{
  scaleNumber = checkScale(scaleNumber,false);
  scaleDiv(scaleNumber);
}


function scaleDiv(numScale)
{
  var myDiv = document.getElementById("glowInTheDark");
  myDiv.style.transform = "scale("+numScale+","+numScale+")";
}
//var fun = setInterval(scaleHeadings, 40);

