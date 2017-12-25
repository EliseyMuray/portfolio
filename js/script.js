menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if(x.className === "topnav") {
		x.className += " responsitive";
	} else {
		x.className = "topnav";
	}
}