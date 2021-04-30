// Place <div> elements w/ class="circle" randomly on page at load or refresh
// Get the viewport dimensions, so we have our page bounds
let viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// Bring in the objects w/ class="circle"
let circles = document.getElementsByClassName("circle");
// Call this function whenever the page is loaded or refreshed
window.onload = pageReload();

function pageReload() {
	// alert("onload" + viewWidth + viewHeight);
	let randomWidth;
	let randomHeight;
	for(let i = 0; i < circles.length; i++) {
		randomWidth = Math.floor(Math.random() * viewWidth) + "px";
		randomHeight = Math.floor(Math.random() * viewHeight + "px");
		randomHeight *= 2;
		circles.item(i).style.marginLeft = randomWidth;
		circles.item(i).style.marginTop = randomHeight;
	}
};

// Add hidden page, accessed by clicking the moon first, then the dark moon
let moon = document.getElementById("baby");
let darkMoon = document.getElementById("darkMoon");
moon.onclick = function(){onMoonClick(moon)};
darkMoon.onclick = function(){onMoonClick(darkMoon)};

// Declare a variable to hold the value that gets set when the user clicks the moon
let moonClick = false;
let darkMoonClick = false;

function onMoonClick(theMoon) {
	if(theMoon.id == "baby" && darkMoonClick == true) {
		return;
	} else if(theMoon.id == "darkMoon" && moonClick == false) {
		return;
	} else if(theMoon.id == "darkMoon" && moonClick == true) {
		onDarkMoonClick();
		return;
	} else {
		theMoon.style.background = "rgba(245, 243, 206, 0.75)";
		theMoon.style.boxShadow = "0px 0px 80px #F5F3CE";
		moonClick = true;
	}
}

function onDarkMoonClick() {
	// darkMoon.style.background = "rgba(21, 26, 26, 1.0)";
	darkMoon.style.boxShadow = "0px 0px 80px #F50507, 0px 0px 10px #F50507";
	darkMoon.style.background = "rgb(245,55,7)";
	darkMoon.style.background = "radial-gradient(circle, rgba(245,55,7,0.3720354352678571) 4%, rgba(244,85,15,0.5821194688813025) 14%, rgba(250,9,9,1) 73%)"; 
	darkMoonClick = true; 
}

let wellNavItem = document.getElementById("wellNavItem");
let researchNavItem = document.getElementById("researchNavItem");
let historyNavItem = document.getElementById("historyNavItem");
let huntNavItem = document.getElementById("huntNavItem");

wellNavItem.addEventListener("mouseover", function(){onNavItemMouseover(wellNavItem)});
researchNavItem.addEventListener("mouseover", function(){onNavItemMouseover(researchNavItem)});
historyNavItem.addEventListener("mouseover", function(){onNavItemMouseover(historyNavItem)});
huntNavItem.addEventListener("mouseover", function(){onNavItemMouseover(huntNavItem)});

wellNavItem.addEventListener("mouseout", function(){onNavItemMouseout(wellNavItem)});
researchNavItem.addEventListener("mouseout", function(){onNavItemMouseout(researchNavItem)});
historyNavItem.addEventListener("mouseout", function(){onNavItemMouseout(historyNavItem)});
huntNavItem.addEventListener("mouseout", function(){onNavItemMouseout(huntNavItem)});

function onNavItemMouseover(navListItem) {
	// alert("hover");
	navListItem.style.boxShadow = "0px 2px 1px #F9DA7B";
}

function onNavItemMouseout(navListItem) {
	navListItem.style.boxShadow = "";
}




// Debugging Purposes
// let wellNavItem0 = document.getElementById("wellNavItem0");
// wellNavItem0.addEventListener("mouseover", function(){onNavItemMouseover(wellNavItem0)});
// wellNavItem0.addEventListener("mouseout", function(){onNavItemMouseout(wellNavItem0)});

// let navSection = document.getElementById("navSection");
// navSection.addEventListener("mouseover", function(){onNavigationMouseover(navSection)});
// function onNavigationMouseover(navSection) {
// 	alert("navigation mouseover");
// };
// End of debugging purposes




// Make the menu item description appear below the menu item, when the user hovers cursor over menu item
// Make menu item change color on mouse hover
let products = document.getElementById("products");
let utilities = document.getElementById("utilities");
let externalResources = document.getElementById("externalResources");
let about = document.getElementById("about");

products.addEventListener("mouseover", function(){onMenuItemMouseover(products)});
utilities.addEventListener("mouseover", function(){onMenuItemMouseover(utilities)});
externalResources.addEventListener("mouseover", function(){onMenuItemMouseover(externalResources)});
about.addEventListener("mouseover", function(){onMenuItemMouseover(about)});

let menuDescriptionContainer = document.getElementById("menuDescriptionContainer");
let menuDescriptions = document.getElementsByClassName("menu-description");
let arrows = document.getElementsByClassName("arrow");
let menuItemSpan = document.getElementsByClassName("menu-item-span");

function onMenuItemMouseover(menuItem) {
	menuItem.style.color = "#323E40";
	menuItem.style.textShadow = "5px 5px 3px #283233, -5px -5px 3px #283233, 5px -5px 3px #283233";
	menuDescriptionContainer.style.display = "block";
	let menuDescriptionId = menuItem.id + "Description";
	menuDescriptions.namedItem(menuDescriptionId).style.display = "block";
	let menuItemSpanId = menuItem.id + "Span";
	menuItemSpan.namedItem(menuItemSpanId).style.display = "block";
	let arrowId = menuItem.id + "Arrow";
	arrows.namedItem(arrowId).style.display = "block";
}

products.addEventListener("mouseout", function(){onMenuItemMouseout(products)});
utilities.addEventListener("mouseout", function(){onMenuItemMouseout(utilities)});
externalResources.addEventListener("mouseout", function(){onMenuItemMouseout(externalResources)});
about.addEventListener("mouseout", function(){onMenuItemMouseout(about)});

function onMenuItemMouseout(menuItem) {
	menuItem.style.color = "";
	menuItem.style.textShadow = "";
	menuDescriptionContainer.style.display = "";
	let menuDescriptionId = menuItem.id + "Description";
	menuDescriptions.namedItem(menuDescriptionId).style.display = "";
	let menuItemSpanId = menuItem.id + "Span";
	menuItemSpan.namedItem(menuItemSpanId).style.display = "";
	let arrowId = menuItem.id + "Arrow";
	arrows.namedItem(arrowId).style.display = "";
};

// 
// Well of Knowledge
// 

// When the user reaches a certain part of the page, a light appears that follows the curosr
// let wellBodyElement = document.getElementById("well-bg");
// wellBodyElement.onmouseenter = function(event){
// 	// alert("entered");
// 	console.log("entered");
// };
// wellBodyElement.onmousemove = function(event){
// 	// alert("moved");
// 	console.log("moved");
// }

// let deepWellSection = document.getElementById("deepWellSection");
// deepWellSection.onmouseenter = function(event){
// 	alert(event.x + " " + event.y);
// };