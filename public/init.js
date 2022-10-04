function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

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
    
    // if guest login in URL
    if (urlParams.get('noRedirect') == 1) {
        // console.log(urlParams.get('noRedirect'));

        setTimeout(function () { 
            const collection = document.getElementsByClassName("d2l-login-portal-flex");
            if (collection.length > 0) {
                collection[0].classList.add("modal-login");
            }
        }, 500);
    }

    // if guest login button
    const btn = document.getElementById('btn_guest_login');
    if (btn) {
        // console.log(btn);
        btn.addEventListener("click", function(){
            const collection = document.getElementsByClassName("d2l-login-portal-flex");
            if (collection.length > 0) {
                collection[0].classList.add("modal-login");
            }
        });

        setTimeout(function () { 
            const login_btn_container = document.getElementsByClassName("d2l-login-portal-login-container");
            if (login_btn_container.length > 0) {
                // console.log(login_btn_container);

                const login_btn = login_btn_container[0].getElementsByClassName('d2l-button');
                if (login_btn.length > 0) {
                    // console.log(login_btn);

                    const btn_cancel = document.createElement("button");
                    btn_cancel.setAttribute('class', 'd2l-button d2l-cancel-button');
                    btn_cancel.setAttribute('type', 'button');
                    btn_cancel.textContent = 'Cancel';
                    btn_cancel.addEventListener("click", function(){
                        const collection = document.getElementsByClassName("d2l-login-portal-flex");
                        if (collection.length > 0) {
                            collection[0].classList.remove("modal-login");
                        }
                    });

                    insertAfter(btn_cancel,  login_btn[0]);
                }
            }
        }, 500); // we need to delay - javascript slow loading
    }
}

init('/shared/public/uct-login-page.min.css?d=20220926');
header_right();
