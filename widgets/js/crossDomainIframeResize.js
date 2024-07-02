/************************************************************************************************************************
                                                |======/     Vlad Adam      \======|
                                                |=====/    Thoransoft inc.   \=====|
                                                |====/       27-06-2013       \====|
                                                        


  /$$$$$$                                                                                                              
 /$$__  $$                                                                                                             
| $$  \__/  /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$$                                                                      
| $$       /$$__  $$ /$$__  $$ /$$_____//$$_____/                                                                      
| $$      | $$  \__/| $$  \ $$|  $$$$$$|  $$$$$$                                                                       
| $$    $$| $$      | $$  | $$ \____  $$\____  $$                                                                      
|  $$$$$$/| $$      |  $$$$$$/ /$$$$$$$//$$$$$$$/                                                                      
\______/ |__/       \______/ |_______/|_______/                                                                       
                                                                                                                       
                                                                                                                       
                                                                                                                       
 /$$$$$$$                                    /$$                                                                       
| $$__  $$                                  |__/                                                                       
| $$  \ $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$ /$$$$$$$                                                              
| $$  | $$ /$$__  $$| $$_  $$_  $$ |____  $$| $$| $$__  $$                                                             
| $$  | $$| $$  \ $$| $$ \ $$ \ $$  /$$$$$$$| $$| $$  \ $$                                                             
| $$  | $$| $$  | $$| $$ | $$ | $$ /$$__  $$| $$| $$  | $$                                                             
| $$$$$$$/|  $$$$$$/| $$ | $$ | $$|  $$$$$$$| $$| $$  | $$                                                             
|_______/  \______/ |__/ |__/ |__/ \_______/|__/|__/  |__/                                                             
                                                                                                                       
                                                                                                                       
                                                                                                                       
 /$$$$$$  /$$$$$$                                                 /$$$$$$$                      /$$                    
|_  $$_/ /$$__  $$                                               | $$__  $$                    |__/                    
  | $$  | $$  \__//$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$       | $$  \ $$  /$$$$$$   /$$$$$$$ /$$ /$$$$$$$$  /$$$$$$ 
  | $$  | $$$$   /$$__  $$|____  $$| $$_  $$_  $$ /$$__  $$      | $$$$$$$/ /$$__  $$ /$$_____/| $$|____ /$$/ /$$__  $$
  | $$  | $$_/  | $$  \__/ /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$      | $$__  $$| $$$$$$$$|  $$$$$$ | $$   /$$$$/ | $$$$$$$$
  | $$  | $$    | $$      /$$__  $$| $$ | $$ | $$| $$_____/      | $$  \ $$| $$_____/ \____  $$| $$  /$$__/  | $$_____/
 /$$$$$$| $$    | $$     |  $$$$$$$| $$ | $$ | $$|  $$$$$$$      | $$  | $$|  $$$$$$$ /$$$$$$$/| $$ /$$$$$$$$|  $$$$$$$
|______/|__/    |__/      \_______/|__/ |__/ |__/ \_______/      |__/  |__/ \_______/|_______/ |__/|________/ \_______/
                                                                                                                       
                                                                                                                       
************************************************************************************************************************/  

                                                                                                               


/*****************************************************************************
  ______               _   _                   _____                     _   
 |  ____|             | | (_)                 |  __ \                   | |  
 | |__ ___  _ __   ___| |_ _  ___  _ __  ___  | |__) |_ _ _ __ ___ _ __ | |_ 
 |  __/ _ \| '_ \ / __| __| |/ _ \| '_ \/ __| |  ___/ _` | '__/ _ \ '_ \| __|
 | | | (_) | | | | (__| |_| | (_) | | | \__ \ | |  | (_| | | |  __/ | | | |_ 
 |_|  \___/|_| |_|\___|\__|_|\___/|_| |_|___/ |_|   \__,_|_|  \___|_| |_|\__|
*****************************************************************************/


var FrameManager = {
    currentFrameId: '',
    currentFrameHeight: 0,
    lastFrameId: '',
    lastFrameHeight: 0,
    resizeTimerId: null,

    init: function() {
        if (FrameManager.resizeTimerId == null) {
            FrameManager.resizeTimerId = window.setInterval(FrameManager.resizeFrames, 5);
        }
    },
    resizeFrames: function() {
        FrameManager.retrieveFrameIdAndHeight();

        if ((FrameManager.currentFrameId != FrameManager.lastFrameId) || (FrameManager.currentFrameHeight != FrameManager.lastFrameHeight)) {
            var iframe = document.getElementById(FrameManager.currentFrameId.toString());
            if (iframe == null) return;

            iframe.style.height = FrameManager.currentFrameHeight.toString() + "px";
            // Animate frame height
            //$(iframe).animate({ height: FrameManager.currentFrameHeight }, 300);
            FrameManager.lastFrameId = FrameManager.currentFrameId;
            FrameManager.lastFrameHeight = FrameManager.currentFrameHeight;
            window.top.location.hash = "_"; // laisser un _ pour pas que la page scroll (fonctionalité par défaut des browsers avec le hash)
        }
    },

    retrieveFrameIdAndHeight: function() {
        if (parent.window.location.hash.length == 0) return;
        var hashValue = parent.window.location.hash.substring(1);
        if ((hashValue == null) || (hashValue.length == 0)) return;
        var pairs = hashValue.split('&');
        if ((pairs != null) && (pairs.length > 0)) {
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split('=');
                if ((pair != null) && (pair.length > 0)) {
                    if (pair[0] == 'frameId') {
                        if ((pair[1] != null) && (pair[1].length > 0)) {
                            FrameManager.currentFrameId = pair[1];
                        }
                    } else if (pair[0] == 'height') {
                        var height = parseInt(pair[1]);
                        if (!isNaN(height)) {
                            FrameManager.currentFrameHeight = height;
                            FrameManager.currentFrameHeight += 15;
                        }
                    }
                }
            }
        }

    },

    registerFrame: function(frame) {

        var currentLocation = location.href;
        var hashIndex = currentLocation.indexOf('#');
        if (hashIndex > -1) {
            currentLocation = currentLocation.substring(0, hashIndex);
        }

        // si le Iframe n'as pas un id, il faut en générer un unique
        if (frame.id == null || frame.id == undefined || !frame.id) {
            var random = (Math.random() * 100000000000000000).toString();
            frame.id = "BPIframe_" + random;
        }


        var parentwidth = $(frame.parentNode).innerWidth();
        $(frame).outerWidth(parentwidth);


        //alert(frame.src + '&frameId=' + frame.id + '&location=' +encodeURIComponent(currentLocation))

        // frame.contentWindow.location = frame.src + '&frameId=' + frame.id + '#' + currentLocation;

    },

    createFrame: function(containerID, target, querystring) {

        var frame = document.createElement("iframe");
        var currentLocation = location.href;

        // si on a un hash dans la location actuelle, il faut l'enlever
        var hashIndex = currentLocation.indexOf('#');
        if (hashIndex > -1) {
            currentLocation = currentLocation.substring(0, hashIndex);
        }

        //générer un id unique
        frame.id = "BPIframe_" + containerID;


        var framesrc = target + "?" + querystring;
        if (querystring != "") {
            framesrc += "&";
        }
        framesrc += 'frameId=' + frame.id + '&location=' + encodeURIComponent(currentLocation);

        // IE8 fix 
        frame.frameBorder = "0";

        frame.src = framesrc;

        // redimensionner le width du iframe
        /* var parentwidth = $("#" + containerID).innerWidth();
        $(frame).width(parentwidth-10);
        */
        //frame.scrolling = "no"; // pour ne jamais afficher les scrollbars du iframe (dangereux si on a un iframe qui est pas assez large pour afficher le contenu)
        
        $(frame).css('overflowY', 'hidden');
        
        $(frame).width("100%");
        $("#" + containerID).append(frame)
    }


};






/*******************************************************************************
  ______               _   _                   ______        __            _   
 |  ____|             | | (_)                 |  ____|      / _|          | |  
 | |__ ___  _ __   ___| |_ _  ___  _ __  ___  | |__   _ __ | |_ __ _ _ __ | |_ 
 |  __/ _ \| '_ \ / __| __| |/ _ \| '_ \/ __| |  __| | '_ \|  _/ _` | '_ \| __|
 | | | (_) | | | | (__| |_| | (_) | | | \__ \ | |____| | | | || (_| | | | | |_ 
 |_|  \___/|_| |_|\___|\__|_|\___/|_| |_|___/ |______|_| |_|_| \__,_|_| |_|\__|
*******************************************************************************/


var LastFrameHeight = 0;


function publishHeight() {
    var hostUrl = window.location.hash.substring(1);
    if (hostUrl == undefined || hostUrl == "") {
        return "";
    }
    var frameId = getFrameId();
    var actualHeight = $("#totalContainer").outerHeight() + 50;
    if (LastFrameHeight != actualHeight) {
        hostUrl += "#";
        hostUrl += 'frameId=' + frameId;
        hostUrl += '&';
        hostUrl += 'height=' + actualHeight.toString();
        LastFrameHeight = actualHeight;
        window.top.location = hostUrl;
    }
}


function getFrameId() {
    var iframe_url = window.location.href;

    // trouver le premier hash
    var firsthash = iframe_url.indexOf('#');

    // on veut enlever les informations du hash car le iframe_id est dans le querystring normal "?"				
    if (firsthash > -1) {
        var toremove = iframe_url.substring(firsthash);
        iframe_url = iframe_url.replace(toremove, "");
    }

    var qs = parseQueryString(window.location.href);
    var frameId = qs["frameId"];
    var hashIndex = frameId.indexOf('#');

    if (hashIndex > -1) {
        frameId = frameId.substring(0, hashIndex);
    }
    return frameId;
}

function parseQueryString(url) {
    url = new String(url);
    var queryStringValues = new Object(),
			querystring = url.substring((url.indexOf('?') + 1), url.length),
			querystringSplit = querystring.split('&');

    for (i = 0; i < querystringSplit.length; i++) {
        var pair = querystringSplit[i].split('='),
				name = pair[0],
				value = pair[1];

        queryStringValues[name] = value;
    }
    return queryStringValues;

}
