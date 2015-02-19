var CSSSwitcher = CSSSwitcher || {}; //Creates the main class

var SSPath; //Initiate variables

CSSSwitcher.setSSPath = function (path) { //Sets the path for the theme folder
	if(path.charAt(path.length()) == "/"){
		this.SSPath = path
	}else{
		this.SSPath = path + "/"
	}
}
CSSSwitcher.loadDefaultStylesheet = function (theme) {
	if (theme) {
		break;
		// Code here
	}else{
		console.error("The theme name input has been left blank, please try again with a valid theme name.");
	}
};