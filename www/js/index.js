var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;
var Total_Actions = 0;
var Touch_count = 0;

var key = "pen";
var value = "blue";
window.localStorage.setItem(key, value);

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() 
{
	//$("#launched").text("Application launched so far into the air, it's literally a star now: " + launched_count);

	$("#resumed").text("The value for the key pen " + value);
	
	//$("#paused").text("Application resumed, damn right you resumed this sexy ass application: " + value);
	
	//$("#TotalActions").text("Total number of actions you've performed in this session: " + Total_Actions);	
}


// device APIs are available
//
    function onDeviceReady() 
	{	
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		Total_Actions++;
		updateDisplay();
			
		alert("device ready to rumble!!!");
    }


    function onPause() 
	{		
		paused_count++;
		Total_Actions++;
		updateDisplay();
			
		alert("paused like a bad movie #bestjoke2018");
    }
	

    function onResume() 
	{
		
		resumed_count++;
		Total_Actions++;
		updateDisplay();
			
		alert("reZOOOOOOOOOOOOOM");
	
		if (confirm("Press a button!")) 
		{
		txt = value;
		var value = "Red";
		}
		
		else 
		{
		txt = value;
		var value = "Green";
		}
	
    }
