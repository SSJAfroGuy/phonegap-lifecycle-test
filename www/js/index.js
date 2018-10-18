var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;
var Total_Actions = 0;
var Touch_count = 0;

localStorage.setItem('pen', 'blue');
localStorage.setItem('pizza', 'nom');
localStorage.setItem('phones', '2');
var value = localStorage.getItem('pizza');
var pen_V = localStorage.getItem('pen');

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() 
{
	//$("#launched").text("Application launched so far into the air, it's literally a star now: " + launched_count);

	$("#resumed").text("The value for the key pen " + pen_V);
	
	$("#paused").text("for something " + value);
	
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
		var value = localStorage.getItem(phones);
		resumed_count++;
		Total_Actions++;
		updateDisplay();
		
			
		alert("reZOOOOOOOOOOOOOM");
	
		if (confirm("Press a button!")) 
		{
		txt = "NoK";
		}
		
		else 
		{
		txt = "Ok";
		}
	
    }
