var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var Total_Actions = 0;
var Total_Key_Press = 0;
var Touch_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched so far into the air, it's literally a star now: " + launched_count);
	$("#resumed").text("Application paused, you should unpause senpai!: " + paused_count);
	$("#paused").text("Application resumed, damn right you resumed this sexy ass application: " + resumed_count);
	$("#TotalActions").text("Total number of actions you've performed in this session: " + Total_Actions);
	$("#TotalKeyPress").text("Total Key Presses: " + Total_Key_Press );
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("key", onkeypress, false);
	document.addEventListener("touch", onTouch, false);
	
	launched_count++;
	Total_Actions++;
	updateDisplay();
	    
	alert("device ready to rumble!!!");
    }


    function onPause() {
	
	paused_count++;
	Total_Actions++;
	updateDisplay();
	    
	alert("paused like a bad movie #bestjoke2018");
    }
	

    function onResume() {
		
	resumed_count++;
	Total_Actions++;
	updateDisplay();
	    
	alert("reZOOOOOOOOOOOOOM");
    }
	
	function onKey() {
		
		Total_Key_Press++;
		Total_Actions++;
		updateDisplay();
		
		alert("OMG YOU PRESSED A KEY, WTF, YOU TRYING TO BREAK THIS APP");
	}
	
	function onTouch() {
		
		Touch_count++;
		Total_Actions++;
		updateDisplay();
		
		alert("stop touching me :O >_< ");
		
	}
