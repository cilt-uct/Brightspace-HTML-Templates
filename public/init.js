let header_right = function() {
    const node = document.createElement("div");
    node.setAttribute('class', 'd2l-navigation-header-right');
    node.setAttribute('slot', 'right');

    const _img = document.createElement('img');
    _img.setAttribute('src', '/shared/public/UCT_logo.png');
    _img.setAttribute('alt', 'University of Cape Town');
    node.appendChild(_img);
    
    let _div = document.getElementsByTagName('d2l-navigation-main-header');
    if (_div.length > 0) {
        _div[0].appendChild(node);
    }
}

let init = function(file) {
    // console.log("Adding CSS");

    // Create new link Element
    let link = document.createElement('link');
 
    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = file;

    // Get HTML head element to append
    // link element to it
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if (urlParams.get('noRedirect') == 1) {
        // console.log(urlParams.get('noRedirect'));

        setTimeout(function () { 
            const collection = document.getElementsByClassName("d2l-login-portal-flex");
            if (collection.length > 0) {
                collection[0].classList.add("modal-login");
                // console.log(collection[0].classList);
            }
        }, 500);
    }
}

init('/shared/public/uct-login-page.min.css?d=20220926');
header_right();
