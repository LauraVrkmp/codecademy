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