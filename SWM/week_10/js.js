//moving list of sites
var designs = document.getElementById('design-selection');
var supporting = document.getElementById('zen-supporting');
document.querySelector('.sidebar .wrapper').removeChild(designs);
document.querySelector('.page-wrapper').insertBefore(designs, supporting);

//adding aside to list of sites
var aside = document.querySelector('aside');
document.querySelector('.page-wrapper').removeChild(aside);
designs.appendChild(aside);


//moving preamble
var preamble = document.getElementById('zen-preamble');
var explanation = document.getElementById('zen-explanation');
document.querySelector('.intro').removeChild(preamble);
supporting.insertBefore(preamble, explanation);

//moving footer
var footer = document.querySelector('footer');
var extra1 = document.querySelector('.extra1');
supporting.removeChild(footer);
document.querySelector('body').insertBefore(footer, extra1);

//add arrow
var selectDesign = document.querySelector('.select');
var downArrow = document.createElement("img");
downArrow.src = 'img/downarrow.svg';
downArrow.setAttribute("alt", "choose");
designs.insertBefore(downArrow, selectDesign); 


//wrap main header content in a div with display:table-cell to vertically center content
headerHTML = document.querySelector('[role=banner]').innerHTML;
newHtml = "<div class='headercenter'>" + headerHTML + "</div>";
document.querySelector('[role=banner]').innerHTML = newHtml;// had some help with this part from stackoverflow
document.querySelector('.headercenter h1').innerHTML = "CSS<br />Zen<br />Gar<br />den";

//insert new absolute layer with spinning shell behind header
var header = document.querySelector('header')
var shellHeader = document.createElement("header");
document.querySelector('.intro').insertBefore(shellHeader, header);

//need two different colored shells positioned on top of eachother to create smooth color changing animation 
//(css animation does not support background-image smoothly)
var img1 = document.createElement("img");
img1.src = 'img/shell.png';
img1.setAttribute("alt", "shell");
var img2 = document.createElement("img");
img2.src = 'img/shell2.png';
img2.setAttribute("alt", "shell2");

document.querySelector('.intro header:first-child').innerHTML = "<div class='headercenter'>" + "</div>";
var headerCenter1 = document.querySelector('.intro header:first-child .headercenter');

headerCenter1.appendChild(img1); 
headerCenter1.appendChild(img2); 



//waypoints

var design0 = document.querySelector('.design-selection ul li:first-child');
var design1 = document.querySelector('.design-selection ul li:nth-child(2)');
var design2 = document.querySelector('.design-selection ul li:nth-child(3)');
var design3 = document.querySelector('.design-selection ul li:nth-child(4)');
var design4 = document.querySelector('.design-selection ul li:nth-child(5)');
var design5 = document.querySelector('.design-selection ul li:nth-child(6)');
var design6 = document.querySelector('.design-selection ul li:nth-child(7)');
var design7 = document.querySelector('.design-selection ul li:nth-child(8)');

var designsArray = [design0, design1, design2, design3, design4, design5, design6, design7];

for (i = 0; i < designsArray.length; i++) {
	
	new Waypoint({
	element: designsArray[i],
  	handler: function(direction) {

		if (direction === 'down') { 
			this.element.className = "designs-expand";
		}
		if (direction === 'up') {
			this.element.className = "";
		}
	console.log('Trigger point: ' + this.triggerPoint)
  	},
  	offset: 300 + [i] * -10
	})

}





//attempting to make my own waypoints useing method from: http://www.quirksmode.org/js/findpos.html


//var viewportOffset = preamble.getBoundingClientRect();
//var top = viewportOffset.top;
/*
function findPos(obj) {
	var curtop = 0;

	if (obj.offsetParent) {

	do {
			curtop += obj.offsetTop;

			if (curtop > 1000) {
				console.log(curtop);	
			}
		} while (obj = obj.offsetParent);

		return [curtop];
		
		
	}
	
	
	
}

function findalert() {
	findPos(preamble);
	findPos(supporting);
};

window.addEventListener("scroll", findalert);

if (curtopscroll < 200 ) {
	preamble.className += "new-class";
	alert("top");


window.onscroll = function() {myFunction()};

function myFunction() {
    if (findPos(preamble) > 50) {
        preamble.className += "new-class";
    } else {
        preamble.className += "";
    }
}
}*/

