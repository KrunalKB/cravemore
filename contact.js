function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;
	var regxemail=/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
	var regphone=/^[7-9][0-9]{9}$/

	
	
	error_message.style.padding="10px";

	if(name.length <3){
		text="Please enter valid name ";
		error_message.innerHTML= text;
		return false;
	}

	if(regxemail.test(email) == 0){
		text="Please enter valid email ";
		error_message.innerHTML= text;
		return false;
	}

	if(regphone.test(phone) == 0){
		text="Please enter valid number ";
		error_message.innerHTML= text;
		return false;
	}

	if(message.length <=15){
		text="Please enter more than 15 characters in message";
		error_message.innerHTML= text;
		return false;
	}
	
	alert ("Successfully Submitted ");
		return true;
	
}
