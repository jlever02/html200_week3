//create an array



//var colorsList = ["red", "yellow", "green", "blue"];
//variables IN function (function scope, can see global variables)

//ImageListA
var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";
imageListA[17] = "images/drawing/thumbs/artwork_18.jpg";
imageListA[18] = "images/drawing/thumbs/artwork_19.jpg";

//ImageListB
var imageListB = new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";

//ImageListC
var imageListC = new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";


var output = "";
var drawingOutput = "";

var divs = document.createElement("div");


//Hook onto the thumbs article
function buildThumbnails(){
	var thumbs = document.getElementById('thumbs');
//Create an output variable
	



//first part =: counter (we set up to 0 to start counting the loop)
//second part: condition, (the loop will keep looping as long as the condition is true)
//third part: incremento, (adds one to the conter AFTER the code is executed in the brackets)
	
	for(var i = 0; i <= imageListA.length -1; i++){
		//output += i;//concatonation assignment operator.

		drawingOutput += '<img src="' + imageListA[i] + '" alt="" title=""/>'
	}
	for(var j = 0; j <= imageListB.length -1; j++){
		//output += j;//concatonation assignment operator.

		output += '<img src="' + imageListB[j] + '" alt="" title=""/>'
	}
	for(var k = 0; k <= imageListC.length -1; k++){
		//output += k;//concatonation assignment operator.

		output += '<img src="' + imageListC[k] + '" alt="" title=""/>'
	}
thumbs.innerHTML = output;
	// thumbs.innerHTML = 
	// '<img src="' + imageListA[3] + '" alt="" title="artwork_1" />' +
	// '<img src="' + imageListA[4] + '" alt="" title="artwork_2" />' +
	// '<img src="' + imageListA[5] + '" alt="" title="artwork_3" />' +
	// '<img src="' + imageListA[6] + '" alt="" title="artwork_4" />';

}

window.onload = function(){
	buildThumbnails();
	drawingPics()
};
//Setting up a function that will create the div that will have an <h3> with an id added.
function drawingPics(){

/*New code adding a new Div to the page, Need to separate the paintings by type*/

	
	var drawingTitle = document.createElement("h3");
	drawingTitle.setAttribute("id", "drawings-title");
	
	var node = document.createTextNode("Below are the drawings.");
	divs.appendChild(drawingTitle);
	
	var thumbs = document.getElementById("thumbs");

	drawingTitle.innerHTML = drawingOutput;

	
	thumbs.appendChild(divs);

	divs.appendChild(node);
	divs.appendChild(drawingOutput);


/* End separation */

}