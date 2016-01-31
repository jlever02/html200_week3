//create an array
window.onload = function(){
	//buildThumbnails();
	drawings();
	waterColors();
	oils();

	var thumbs = document.getElementById('thumbs');
};


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
var waterColorOutput = "";
var oilsOutput = "";

var divs = document.createElement("div");


//Setting up a function that will create the div that will have an <h3> with an id added.


function drawings(){	
	//Create a div that functions as the drawings wrapper.
	var drawingDiv = document.createElement("div");
	//Create a title placeholder for drawings.
	var drawingTitle = document.createElement("h3");
	//Create a placeholder for the description.
	var drawingDesc = document.createElement("p");
	//Create a div that will hold all the drawing images.
	var drawingPics = document.createElement("div");

	//Give all the newly created elements their own id and shared class for the description.
	drawingDiv.setAttribute("id", "drawing-paintings");
	drawingTitle.setAttribute("id", "drawings-title");
	drawingDesc.setAttribute("class", "paintingsDesc");
	drawingPics.setAttribute("id", "drawing-pictures")
	
	//Poputlate the placeholder title and descriptions.
	drawingTitle.innerHTML = "Drawings";
	drawingDesc.innerHTML = "Drawings are my favorite";


	//Hook the drawings div onto the thumbs div.
	thumbs.appendChild(drawingDiv);
	//Hook the drawing title onto the drawingDiv.
	drawingDiv.appendChild(drawingTitle);
	//Hook the drawing description onto the drawingDiv.
	drawingDiv.appendChild(drawingDesc);
	//Hook the drawing images onto the drawingDiv.
	drawingDiv.appendChild(drawingPics);

	//Loop through and populate the array with all of the drawings.
	for(var i = 0; i <= imageListA.length -1; i++){
		//output += i;//concatonation assignment operator.

		drawingOutput += '<img src="' + imageListA[i] + '" alt="" title=""/>'
	}
	//Poputlate the drawingPics div created earlier with the images.
	drawingPics.innerHTML = drawingOutput;



}

function waterColors(){
	//Create a div that functions as the Water Colors wrapper
	var waterColorDiv = document.createElement("div");
	//Create a title placeholder for water color pictures.	
	var waterColorTitle = document.createElement("h3");
	//Create a placeholder for the description.
	var waterColorDesc = document.createElement("p");
	//Create a div that will hold all the water color images.
	var waterColorPics = document.createElement("div");

	//Give all the newly created elements their own id and shared class for the description.
	waterColorDiv.setAttribute("id", "waterColor-paintings");
	waterColorTitle.setAttribute("id", "waterColors-title");
	waterColorDesc.setAttribute("class", "paintingsDesc");
	waterColorPics.setAttribute("id", "waterColor-pictures")
	
	//Poputlate the placeholder title and descriptions.
	waterColorTitle.innerHTML = "WaterColors";
	waterColorDesc.innerHTML = "Watercolor paints come in a huge variety of colors and quality. I believe the best attribute of the watercolor medium, is it's portability. A small duffle bag is all you need to store all the tools for a pointing. hiking out far to find that perfect scene is not a hassle, your other gear will take up more space, food, drink extra clothing, music player. It important to remember that your comfort while out in nature should be a priority, if you are focusing on how sore your legs are getting or how hot or cold it is instead of the colors in front of you, that can make for a negative experience.";


	//Hook the water colors div onto the thumbs div.
	thumbs.appendChild(waterColorDiv);
	//Hook the water colors title onto the waterColorDiv.
	waterColorDiv.appendChild(waterColorTitle);
	//Hook the water colors description onto the waterColorsDiv.
	waterColorDiv.appendChild(waterColorDesc);
	//Hook the water colors pictures onto the waterColorsDiv.
	waterColorDiv.appendChild(waterColorPics);

	//Loop through and populate the array with all of the water color pictures.
	for(var j = 0; j <= imageListB.length -1; j++){
		//output += i;//concatonation assignment operator.

		waterColorOutput += '<img src="' + imageListB[j] + '" alt="" title=""/>'
	}
	
	//Poputlate the waterColorPics div created earlier with the images.
	waterColorPics.innerHTML = waterColorOutput;

}

function oils(){
	//Create a div that functions as the oils wrapper.
	var oilDiv = document.createElement("div");
	//Create a title placeholder for Oil pictures.
	var oilTitle = document.createElement("h3");
	//Create a placeholder for the description.
	var oilDesc = document.createElement("p");
	//Create a div that will hold all the water color images.
	var oilPics = document.createElement("div");

	//Give all the newly created elements their own id and shared class for the description.
	oilDiv.setAttribute("id", "oil-paintings");
	oilTitle.setAttribute("id", "oils-title");
	oilDesc.setAttribute("class", "paintingsDesc");
	oilPics.setAttribute("id", "oil-pictures")

	//Poputlate the placeholder title and descriptions.
	oilTitle.innerHTML = "Oils";
	oilDesc.innerHTML = "Oil color painting's benefits to me are the drying time of the paint, as you can easily &ldquo;fix&rdquo; areas that need to be reworked. Getting that eye even on both sides of the face is as easy as wiping away with a cloth and re-sketching a new one. The drying time can also be minus for some as an accidental swipe from your pinky can un-render your perfectly placed eyeball.";

	//Hook the Oil div onto the thumbs div.
	thumbs.appendChild(oilDiv);
	//Hook the oils title onto the oilsDiv.
	oilDiv.appendChild(oilTitle);
	//Hook the oils description onto the oilsDiv.
	oilDiv.appendChild(oilDesc);
	//Hook the oils images onto the oilsDiv.
	oilDiv.appendChild(oilPics);

	//Loop through and populate the array with all of the oil pictures.
	for(var k = 0; k <= imageListC.length -1; k++){
		//output += i;//concatonation assignment operator.

		oilsOutput += '<img src="' + imageListC[k] + '" alt="" title=""/>'
	}
	
	//Poputlate the oilPics div created earlier with the images.
	oilPics.innerHTML = oilsOutput;



}
