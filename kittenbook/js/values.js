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
