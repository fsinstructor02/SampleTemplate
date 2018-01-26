/* JS, JQ  Elements  goes here */


jQuery(function(){ // JQuery function call to run code

    
    for (i = 0; i < mediaContent.length; i++) {  
        
        var channelName = mediaContent[i]['channel']['name'];
        var stationType = mediaContent[i]['channel']['stationType'];
        var webLink = mediaContent[i]['channel']['webLink'];
        var callsign = mediaContent[i]['channel']['callsign'];
       // var showName = mediaContent[i]['listings'][i]['showName'];
        

        console.log(channelName);
        console.log(stationType);
        console.log(webLink);
        console.log(callsign);
        //console.log(showName);


    }

});(jQuery); 
