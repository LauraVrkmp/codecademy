currentDate = new Date();

var kbValues = {
    projectName: 'kittenbook',
    versionNumber: '0.0.1',
    currentTime: currentDate.getFullYear() + '-' + 
                    (currentDate.getMonth() + 1) + '-' +
                    currentDate.getDate() + ' at ' +
                    currentDate.getHours() + ':' +
                    currentDate.getMinutes() + ':' +
                    currentDate.getSeconds()
};

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

var images = document.querySelectorAll('div.x1n2onr6 img');

for (i = 0; i < images.length; i++){
    console.log(images[i].currentSrc);
}

console.log(images.length);
console.log(images);

// Get the greeting element using the id in kittenbook.html
var greeting = document.getElementByID('greeting');

// Create a listener for clicks on the greeting element
greeting.addEventListener('click', function() {
    if (greeting.innerHTML.match(/World/)){
        greeting.innerHTML = 'Ola, mundo!';
    } else {
        greeting.innerHTML = 'Hello, World!';
    }
});
