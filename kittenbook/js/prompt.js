// Get the user's name.
var userName = prompt('Hello, what\'s your name?');
if (!userName){
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
}
// Get the user's phone number.
var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
// Create the phone number pattern.
var phoneNumberPattern = /(0|((\+|00)31))6\-?\d{7}/;
// Create a variable to store the output.
var output = '<h1>Hello, ' + userName + '!</h>';

// Is the phone number valid?
if (phoneNumberPattern.test(phoneNumber)){
    // Valid
    output = output + '<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + 
                ' acccessed on: ' + kbValues.currentTime + '</p>';
} else {
    // Invalid
    output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}

//document.body.innerHTML = output;
