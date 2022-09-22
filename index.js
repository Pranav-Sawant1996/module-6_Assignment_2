let user_DB=[]
 function resetSignUP(){
	
	let firstName = document.getElementById('first-name').value=''
	let lastName = document.getElementById('last-name').value=''
	let email = document.getElementById('email').value=''
	let phoneNumber = document.getElementById('phone-number').value=''
	let password = document.getElementById('password').value=''
	let confirmPassword = document.getElementById('confirm-password').value=''

	  document.getElementById('firstName-valid').style.display='none'
	 document.getElementById('lastName-valid').style.display='none'
	 document.getElementById('email-valid').style.display='none'
	  document.getElementById('phone-number-valid').style.display='none'
	  document.getElementById('password-valid').style.display='none'
	
 }
 

function goToHomePage () {
	document.getElementById('home').style.display = 'block'
	
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('home-link').classList.add('active')
	document.getElementById('login-link').classList.remove('active')
	document.getElementById('signup-link').classList.remove('active')
}

function goToSignUpPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'block'
	

	document.getElementById('signup-link').classList.add('active')
	document.getElementById('home-link').classList.remove('active')
	document.getElementById('login-link').classList.remove('active')
}

function goToLoginPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'block'
	document.getElementById('signup-form').style.display = 'none'
	

	document.getElementById('login-link').classList.add('active')
	document.getElementById('signup-link').classList.remove('active')
	document.getElementById('home-link').classList.remove('active')
}

function signup(isSubmit) {
	if(isSubmit){
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	
	let confirmPassword = document.getElementById('confirm-password').value

	let error = false
	// first name validation
	if(firstName.length >=2){
		document.getElementById('firstName-valid').style.display='block'
		document.getElementById('firstName-invalid').style.display='none'
	}
	else{
		error=true
		document.getElementById('firstName-invalid').style.display='block'
		document.getElementById('firstName-valid').style.display='none'
	}

	// lastname validation
	if(lastName.length >= 2){
		document.getElementById('lastName-valid').style.display='block'
		document.getElementById('lastName-invalid').style.display='none'
	}
	else{
		error=true
		document.getElementById('lastName-invalid').style.display='block'
		document.getElementById('lastName-valid').style.display='none'
	}

	// eamilaid validation
	if(email.includes('@') && email.includes('.') && email.indexOf('@')!=0 && email.substr(email.lastIndexOf('.')+1).length>=2){
		document.getElementById('email-valid').style.display='block'
		document.getElementById('email-invalid').style.display='none'
	}
	else{
		error=true
		document.getElementById('email-invalid').style.display='block'
		document.getElementById('email-valid').style.display='none'
	}

	//  phone number validation
	if(phoneNumber.length ===10){
		document.getElementById('phone-number-valid').style.display='block'
		document.getElementById('phone-number-invalid').style.display='none'
	}
	else{
		error=true
		document.getElementById('phone-number-invalid').style.display='block'
		document.getElementById('phone-number-valid').style.display='none'
	}


	// password validation
	if(password.length >=8){
		document.getElementById('password-valid').style.display='block'
		document.getElementById('password-invalid').style.display='none'
	}
	else{
		error=true
		document.getElementById('password-invalid').style.display='block'
		document.getElementById('password-valid').style.display='none'
	}


	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	if(!error) {
		let userDetails={
			firstName,
			lastName,
			email,
			phoneNumber,
			password:encryptPassword(password),
			confirmPassword
		}
		user_DB.push(userDetails)
		alert("Your details have been saved successfully")
		// document.getElementsById('sign-up-form').reset()
		 console.log(user_DB)
		//  console.log(decryptPassword(user_DB.password))
		// console.log(encryptPassword(user_DB.password))
		 resetSignUP()
	}
	}
}
function resetLogin(){
	let loginEmail = document.getElementById('login-email').value=""
	let loginPassword = document.getElementById('login-password').value=""
}

function login () {
	
	let loginEmail = document.getElementById('login-email').value
	let loginPassword = document.getElementById('login-password').value
		// console.log(loginPassword)
		// console.log(decryptPassword(user.password))
		// console.log(encryptPassword(user.password))
	if(user_DB.find(user => user.email===loginEmail && decryptPassword(user.password)===loginPassword)) {
		alert('Access granted')
	} else {
		alert('Access denied')
	}
	resetLogin()

}
let encryptionRule={
		
	'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': ''

}
 function encryptPassword(inputString){
	let encriptedString=""
	
for(let char of inputString){
	
	encriptedString= encriptedString + encryptionRule[char]
}
return encriptedString	
 }

 function decryptPassword(encriptedString){
	let decryptedPassword=""
	let keys=Object.keys(encryptionRule)
	let values=Object.values(encryptionRule)
	for(let char of encriptedString){
	let index=values.indexOf(char)
	decryptedPassword=decryptedPassword+ keys[index]
		
	}
	return decryptedPassword
 }