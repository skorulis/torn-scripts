// ==UserScript==
// @name         Flight screen adjuster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.torn.com/index.php
// @grant        none
// ==/UserScript==

function moveTimeToTop() {
    let element = document.createElement("H4");
    element.id = "flight-time";
    element.style.textAlign = "center";
    element.style.padding = "20px";

    document.querySelector(".content-title").appendChild(element);

    let existingElement = document.querySelector(".destination-title > .remaining-time");

    var callback = function(mutationsList, observer) {
        element.innerText = existingElement.innerText;
    };

    var observer = new MutationObserver(callback);

    var config = { attributes: true, childList: true, subtree: true };
    observer.observe(existingElement, config);
}

(function() {
    'use strict';
    moveTimeToTop();
})();