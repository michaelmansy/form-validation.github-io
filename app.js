// we want the validation to happen when the submit button is clicked

//function to validate email address
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$('#submitButton').click(function(){
	var errorMessage = ""; //check the type of the error
	var fieldMissing = ""; //check if the user entered something

	if($('#email').val() == ""){
		fieldMissing += "<br>Email";
	}
	if($('#phone').val() == ""){
		fieldMissing += "<br>Telephone";
	}
	if($('#password').val() == ""){
		fieldMissing += "<br>Password";
	}
	if($('#passwordConfirm').val() == ""){
		fieldMissing += "<br>Confirm Password";
	}

	if(fieldMissing != ""){
		errorMessage += "<p>The following field(s) are missing</p>" + fieldMissing;
	}else{
		$('#successMessage').show();
		$('#errorMessage').hide();
	}


	if(isEmail($('#email').val()) == false){
		errorMessage += "<p>your email address is not valid</p>";
	}
	//isNumeric is a built in jQuery function
	if($.isNumeric($('#phone').val()) == false){
		errorMessage += "<p>your phone number is not numeric</p>";
	}
	if($('#password').val() != $('#passwordConfirm').val()){
		errorMessage += "<p>your passwords dont match</p>"
	}

	// alert(errorMessage);
	//instead of just alerting the error message 
	//we target its div
	$('#errorMessage').html(errorMessage);
});