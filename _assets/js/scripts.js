
/** Code Snippet JavaScript **/
/* Needs to go at top of script file so copies unaltered code */
$.each($('.component-sample'), (function () {
   var componentCode = $(this).html();
   var codeReplace = {
      '<':'&lt;',
      '>':'&gt;',
      '  ':''
   };
   componentCode = componentCode.replace(/<|>|  /gi, (function(matched){
      return codeReplace[matched];
    }));
    //var componentCode = componentCode.replace(/(?:\r\n|\r|\n)/gi, '');
   $(this).append('<pre class="code-sample copy-this card bg-light"><code>' + componentCode + '</code></pre><p><button class="btn copy-btn" data-toggle="tooltip" data-placement="top" title="Copy Code To Clipboard">Copy Code</button></p>');
}));


/** Copy Button JavaScript **/
$(".copy-btn").on('click', (function () {
   var copyText = $(this).parent().prev('.copy-this');
   /* copyToClipBoard(copyText[0].textContent); */
   var copyTextString = String(copyText[0].textContent);
   var tempTextArea = document.createElement('textarea');
   tempTextArea.value = copyTextString;
   document.body.appendChild(tempTextArea);
   tempTextArea.select();
   document.execCommand('copy');
   document.body.removeChild(tempTextArea);
   $(this).html('Code Copied');
}));

/** Accordions JavaScript **/

/** Accordions - dynamically add id **/
$.each($(".accordion"), (function (index) {
   $(this).attr("id", "accordion_" + parseInt(index + 1));
}));

/** Accordions - dynamically add interaction **/
$.each($(".accordion > .card"), (function (index, value) {
         var num = index + 1;
         $(value).children(".card-header").attr("id", "heading_acc_" + num);
         $(value).find(".card-header > .card-title").wrapInner( "<button  class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\"></button>");
         $(value).find(".card-header > .card-title > button").attr({
            "data-target": "#collapse_acc_" + num,
            "aria-controls": "collapse_acc_" + num
         });
         $(value).children(".collapse").attr({
            id: "collapse_acc_" + num,
            "aria-labelledby": "heading_acc_" + num
         });
}));

/** Background Image JavaScript **/
/* Get all the elements with the class bg-img-wrapper on page */
var bgImgWrapper = document.getElementsByClassName("bg-img-wrapper");
/* Cycle through the elements we want to have a background image */
for(var bgImgIndex = 0; bgImgIndex < bgImgWrapper.length; bgImgIndex++)
{
   /* Declare variable bgImgId */
   var bgImgWrapperId = "bg-img-wrapper-" + parseInt(bgImgIndex);
   /* Add bgImgWrapperId as unique ID to each element with class .bg-img-wrapper */
   document.querySelectorAll('.bg-img-wrapper')[bgImgIndex].setAttribute("id", bgImgWrapperId);
   /* Get the background image from the source of the first child image */
   var bgImg = document.getElementById(bgImgWrapperId).getElementsByTagName('img')[0].src;
   /* Set the background image on each element with class .bg-img-wrapper */
   document.querySelectorAll('.bg-img-wrapper')[bgImgIndex].setAttribute("style", 'background-image: url(' + bgImg + ');');
}


/** Icons JavaScript **/

/** Links JavaScript **/

 /* Check for links in document */ 
 var links = document.querySelectorAll("a");
 /* Create index for download links unique id*/
 var downloadIndex = 0;
 /* Create index for new window links unique id*/
 var newWindowIndex = 0;
 /* Check links on page */
 for(var linkIndex = 0; linkIndex < links.length; linkIndex++)
 {
    /* Creating a span to wrap the screen-reader text */ 
    var srTxtWrapper = document.createElement("span");
    /* Add class .sr-only to screen-reader span */
    srTxtWrapper.classList.add("sr-only");
   
 if (links[linkIndex].classList.contains("download")) {
   /* Add download attribute */
   links[linkIndex].setAttribute("download", "");
   /* Add unique id to download link */
   links[linkIndex].setAttribute("id", "download-file-" + downloadIndex);
   /* Add title attribute saying download file */
   links[linkIndex].setAttribute("title", "download file");
   /* Add data-toggle tooltip data attribute */
   links[linkIndex].setAttribute("data-toggle", "tooltip");
    /* Creating the screen-reader text */ 
   var srTxt = document.createTextNode("(this link downloads a file)");
   /* Adding the screen-reader text to the span*/ 
   srTxtWrapper.appendChild(srTxt); 
   links[linkIndex].appendChild(srTxtWrapper);
   /* Increase downloadIndex by one for next download link */
   downloadIndex++;
 }
 else if (links[linkIndex].classList.contains("new-window")) {
   /* Add target _blank attribute for link to open in new window */
   links[linkIndex].setAttribute("target", "_blank");
   /* Add unique id to new window link */
   links[linkIndex].setAttribute("id", "new-window" + newWindowIndex);
   /* Add title attribute saying link opens in new window */
   links[linkIndex].setAttribute("data-original-title", "opens in new window/tab");
   /* Add data-toggle tooltip data attribute */
   links[linkIndex].setAttribute("data-toggle", "tooltip");
   /* Creating the screen-reader text */ 
   var srTxt = document.createTextNode("(this link opens in a new window/tab)");
   /* Adding the screen-reader text to the span*/ 
   srTxtWrapper.appendChild(srTxt); 
   links[linkIndex].appendChild(srTxtWrapper);
 }
 }

/** Tabs JavaScript **/
/** Tabs - dynamically add interaction **/
/* .list-group add ID */
$.each($(".list-group"), (function (index) {
   $(this).attr("id", "list-tab_" + parseInt(index + 1));
}));
/* .list-group-item add attributes */
$.each($(".list-group > .list-group-item"), (function (index, value) {
   var num = index + 1;
   $(value).attr({
      "id": "list-" + num + "-list",
      "href": "#list-" + num,
      "aria-controls": "list-" + num
   });
}));
/* .tab-content add ID */
$.each($(".tab-content"), (function (index) {
   $(this).attr("id", "nav-tabContent_" + parseInt(index + 1));
}));
/* .tab-pane add attributes */
$.each($(".tab-content > .tab-pane"), (function (index, value) {
   var num = index + 1;
   $(value).attr({
      "id": "list-" + num,
      "aria-labelledby": "list-" + num + "-list"
   });
}));

 /** Video JavaScript **/