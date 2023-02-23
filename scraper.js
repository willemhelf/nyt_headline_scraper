var headers = document.getElementsByTagName("h4") // collect all instances of headlines
var headerCount = 0 //set a ticker

function scrapeHeaders(term) {
    for (var i = 0; i < headers.length; i++) { // go through every headline
        if(headers[i].innerHTML.indexOf(term) > 0) { // check if the desired word is used
            headerCount++ // add 1 to ticker
        }
    }
    return headerCount // give us final ticker count
}

scrapeHeaders("Transgender") // run the code with desired word 