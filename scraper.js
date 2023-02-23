var headers = document.getElementsByTagName("h4") 
var headerCount = 0 

function scrapeHeaders(term) {
    for (var i = 0; i < headers.length; i++) { 
        if(headers[i].innerHTML.indexOf(term) > 0) { 
            headerCount++ 
        }
    }
    return headerCount 
}

scrapeHeaders("")  