


var funVar;
var timeoutVar = 100;

function fadeDateCircle()
{
  var elem = document.getElementById("dateCircle");
  funVar = setTimeout(changeOpacity, timeoutVar, 0.8, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*2, 0.6, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*3, 0.4, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*4, 0.2, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*5, 0.1, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*6, 0.2, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*7, 0.4, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*8, 0.4, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*9, 0.8, elem);
  funVar = setTimeout(changeOpacity, timeoutVar*10, 1, elem);
  var colorHex = getRandomColorHex();
  var boxShadow = "0 0 5vw "+ colorHex+", inset 0 0 5vw "+colorHex;
  console.log(boxShadow);
  changeBoxShadow(boxShadow, elem);



}

function fadeInterval()
{
	setInterval(fadeDateCircle, 1100);
}

function changeOpacity(opacity, elem)
{
  elem.style.opacity = opacity;  
}
function changeBoxShadow(boxShadow, elem)
{
  elem.style["boxShadow"] = boxShadow;
}

function getRandomColorHex()
{
	var colors = ['pink', 'yellow', 'orange', 'blue', 'green','purple'];
	var randomColor = colors[Math.floor(Math.random()*colors.length)];
	var colorHex = "";
	switch(randomColor)
	{
		case 'pink':
			colorHex = "#9D1955";
		break;
		case 'yellow':
			colorHex = "#FFD314";
		break;
		case 'orange':
			colorHex = "#FF850C";
		break;
		case 'blue':
			colorHex = "#109CB7";
		break;
		case 'green':
			colorHex = "#1FA739";
		break;
		case 'puple':
			colorHex = "#8D0FC8";
		break;

	}
	return colorHex;
}
