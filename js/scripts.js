/* JS, JQ  Elements  goes here */


jQuery(function(){ // JQuery function call to run code

    for (i = 0; i < mediaContent.length; i++) {  
        
        //Channel Section
        var channelName = mediaContent[i]['channel']['name'];
        var stationType = mediaContent[i]['channel']['stationType'];
        var webLink = mediaContent[i]['channel']['webLink'];
        var callsign = mediaContent[i]['channel']['callsign'];
        var logoFilename =  mediaContent[i]["channel"]["logoFilename"];
        var stationHD =  mediaContent[i]["channel"]["stationHD"];
        var stationID =  mediaContent[i]["channel"]["stationID"];
        //var episodeNumber =  mediaContent[i]["channel"]["episodeNumber"];
    
        console.log(channelName);
        console.log(stationType);
        console.log(webLink);
        console.log(callsign);
        console.log(logoFilename);
        console.log(stationHD);
        console.log(stationID);
       // console.log(episodeNumber);


        //Listings Section

        try {
            var rating =  mediaContent[i]["listings"][i]["rating"];
            console.log(rating);
        } catch (error) {}

        try {
            var episodeNumber =  mediaContent[i]["listings"][i]["episodeNumber"];
            console.log(episodeNumber);
        } catch (error) {}

        try {
            var castNames =  mediaContent[i]["listings"][i]["cast"];
            console.log(castNames);
        } catch (error) {}

        try {
            var castDescription =  mediaContent[i]["listings"][i]["description"];
            console.log(castDescription);
        } catch (error) {}
         
        try {
            var showDuration =  mediaContent[i]["listings"][i]["duration"];
            console.log(showDuration);
        } catch (error) {}

        try {
            var showType =  mediaContent[i]["listings"][i]["showType"];
            console.log(showType);
        } catch (error) {}

        //var test = mediaContent[i]['listings'];
       // console.log(test);

    }

});(jQuery); 
