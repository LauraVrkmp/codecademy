function getDateandTime() {
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
    return kbValues;
}

function getUserName() {
    // Get the user's name.
    var userName = prompt('Hello, what\'s your name?');
    if (!userName){
        userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
    }
    return userName;
}

function checkPhoneNumber(userName) {
    // Get the user's phone number.
    var phoneNumber = prompt('Hello ' + userName + ', what\'s your phone number?');
    // Create the phone number pattern.
    var phoneNumberPattern = /(0|((\+|00)31))6\-?\d{7}/;
    // Create a variable to store the output.
    var output = '<h1>Hello, ' + userName + '!</h>';

    output = output + '<h2 id=\'greeting\'>Hello, World!</h2>';

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
}

function getImages() {
    var images = document.querySelectorAll('div.x1n2onr6 img');
    return images;
}

function addEvent() {
    // Get the greeting element using the id in kittenbook.html
    var greeting = document.getElementById('greeting');

    // Create a listener for clicks on the greeting element
    greeting.addEventListener('click', function() {
        if (greeting.innerHTML.match(/World/)){
            greeting.innerHTML = 'Ola, mundo!';
        } else {
            greeting.innerHTML = 'Hello, World!';
        }
    });
}

function getImageHeight(image) {
    return image.height;
}

function getImageWidth(image) {
    return image.width;
}

function replaceImages(images) {
    var baseImageUrl, height, width, image;

    baseImageUrl = 'http://placekitten.com/g/';

    for (var i = 0, len = images.length; i < len; i++) {
        image = images[i];
        height = getImageHeight(image);
        width = getImageWidth(image);
        image.src = baseImageUrl + width + '/' + height;
    }
}

function main() {
    var kbValues = getDateandTime();
    var userName = getUserName();
    checkPhoneNumber(userName);
    //addEvent();
    
    var images = getImages();

    setInterval (function() {
        images = getImages();
        replaceImages(images);
    }, 3000);    
}

main();