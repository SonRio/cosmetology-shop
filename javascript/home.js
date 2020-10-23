$(document).ready(function() {
	var slider = $("#image_list");                   
	var leftProperty, newleftProperty,rightProperty,newRightProperty;					
	$("#right_button").click(function() { 
		leftProperty = parseInt(slider.css("left"));
		if (leftProperty - 870 <= -2700) {
			newLeftProperty = 0;
		}
		else {
			newLeftProperty = leftProperty - 870;

			}
			slider.animate( {left: newLeftProperty}, 500);
	});  
	
	$("#left_button").click(function() {
		rightProperty = parseInt(slider.css("right"));
		if(rightProperty == 0){
			newRightProperty = rightProperty - 1750;
		}else {
			// newRightProperty = 870 - rightProperty;
			if (rightProperty - 870 <= -850) {
			newRightProperty = 0;
		}
		else {
				newRightProperty = 870 - rightProperty;
			}
		
		}
		console.log(newRightProperty);
		console.log(rightProperty)			
		slider.animate( {left: newRightProperty}, 500);
	});
}); 
