const pwdInput = document.getElementById("password");
const validInput = document.getElementById("validation");
const btnSubmit = document.getElementById("submit");
const blkResult = document.getElementById("result");
const blkSuccess = document.getElementById("success");
const blkInvalidLength = document.getElementById("invalidlength");
const blkInvalidMatch = document.getElementById("invalidmatch");

btnSubmit.onclick = function() {
	blkResult.style.display = "block";
	if(pwdInput.value.length < 8){
		blkInvalidLength.style.display = "block";
	} else {
		blkInvalidLength.style.display = "none";
	}
	if(pwdInput.value != validInput.value){
		blkInvalidMatch.style.display = "block";
	} else {
		blkInvalidMatch.style.display = "none";
	}
	if(pwdInput.value.length >= 8 && pwdInput.value == validInput.value){
		blkSuccess.style.display = "block";
	} else {
		blkSuccess.style.display = "none";
	}
}