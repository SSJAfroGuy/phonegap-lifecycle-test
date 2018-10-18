var key = “pen”;
var value = “blue”;
window.localStorage.setItem( key, value );

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	var key = "pen";
	var value = window.localStorage.getItem(key)
	$("#pen_K").text("key");
	$("#pen_V").text("value");
}

// device APIs are available
//
    function onDeviceReady() {	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	updateDisplay();
	    
	alert("device ready to rumble!!!");
    }


    function onPause() {
	updateDisplay();
	    
	alert("paused like a bad movie #bestjoke2018");
    }
	

    function onResume() {
	updateDisplay();
	    
	alert("reZOOOOOOOOOOOOOM");
    }
