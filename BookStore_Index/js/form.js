/**
 * 
 */

// 1.State variables
var emailObj;
var usernameObj;
var passwordObj;
var confirmObj;
var emailMsg;
var usernameMsg;
var passwordMsg;
var confirmMsg;
// 2.Get objects while loading
windows.onload = function() {
	emailObj = document.getElementById("email");
	usenameObj = document.getElementById("username");
	passwordObj = document.getElementById("password");
	confirmObj = document.getElementById("repassword");
	emailMsg = document.getElementById("emailMsg");
	usernameMsg = document.getElementById("usernameMsg");
	passwordMsg = document.getElementById("passwordMsg");
	confirmMsg = document.getElementById("confirmMsg");
};
// 3.Check forms
function checkForm() {
	var bEmail = checkEmail();
	var bUsername = checkUsername();
	var bPassword = checkPassword();
	var bConfirm = checkConfirm();
	// Event will be canceled when returning false
	return bUsername && bPassword && bConfirm && bEmail;
};
// 4.Check email
function checkEmail() {
	var regex = /^[\w-] + @ ([\w-]+\.) + [a-zA-Z] {2,4}$/;
	var value = emailObj.value;
	var msg = "";
	if (!value)
		msg = "Email address is necessary!";
	else if (!regex.text(value))
		msg = "Not valid email address!"
	emailMsg.innerHTML = msg;
emailObj.parentNode.ParentNode.style.color = msg == "" ? "black" : "red"
	return msg == "";
};
// 5.Check user-name
function checkUsername() {
	var regex = /^[a-zA-Z_]\w{0,9}$/;
	var value = usernameObj.value;
	var msg = "";
	if (!value)
		msg = "Username is necessary!"
	else if (!regex.test(value))
		msg = "Not valid username"
	usernameMsg.innerHTML = msg;
usernameObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red"
	return msg == "";
};
// 6.Check password
function checkPassword() {
	var regex = /^.{6,16}$/;
	var value = password.value;
	var msg = "";
	if (!value)
		msg = "Password is necessary!"
	else if (!regex.test(value))
		msg = "Not valid password"
	passwordMsg.innerHTML = msg;
passwordObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red"
	return msg == "";
};
// 7.Check re-password
function checkConfirm() {
	var passwordValue = passwordObj.value;
	var confirmValue = confirmObj.value;
	var msg = "";
	if (!confirmValue)
		msg = "Repassword is necessary!"
	else if (passwordValue != confirmValue)
		msg = "Password must be consistent!"
	confirmMsg.innerHTML = msg;
confirmObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red"
	return msg == "";
};
}