/**************************************************************************************************************************************
                                               
\========================================/
\=========|    Vlad Adam     |=========/
\========|  Thoransoft inc. |========/
\=======|    27-06-2013    |=======/
\================================/     
                                                   


Ce fichier a pour but de détecter si certains fichiers ont été loadés dans le document et de les append au head de la page si ils 
n'existent pas afin que l'intégration des platformes se fasse correctement. 


var  SRC_BPIjq                        => la source du jquery dans BPI doit être déclarée avant d'inclure ce fichier
var  SRC_CD_Iframe                   => la source du crossDomainIframeResize.js dans BPI doit être déclarée avant d'inclure ce fichier
****************************************************************************************************************************************/



window.onload = function() {
    // détecter jquery
    if (typeof $ == 'undefined') {
        if (typeof SRC_BPIjq == undefined) {
            // si on a pas inclu la source de jquery, afficher erreur
            alert("Jquery.js  source from BPI is undefined (SRC_BPIjq)");
        } else {
            // append jquery au body selons la source fournie si jquery n'existe pas
            if (typeof ($) != "function") {
                var oHead = document.getElementsByTagName('head')[0];
                var oScript = document.createElement("script");
                oScript.type = "text/javascript";
                oScript.src = SRC_BPIjq;
                oHead.appendChild(oScript);
            }
        }
    }
}

// détecter frame manager
if (typeof FrameManager == 'undefined') {

    if (typeof SRC_CD_Iframe == undefined) {
        // si on a pas inclu la source du plugin, afficher le message d'erreur
        alert("CrossDomainIFrameResize.js source from BPI is undefined (SRC_CD_Iframe)");
    } else {
        // append le fichier au body de la page
        var oHead = document.getElementsByTagName('head')[0];
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src = SRC_CD_Iframe;
        oHead.appendChild(oScript);
    }

} 