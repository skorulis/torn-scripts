// ==UserScript==
// @name         Stock extractor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Alex Skorulis
// @match        https://www.torn.com/events.php
// @grant        none
// ==/UserScript==

function extractValues(text) {
    let regexString = "^(\\d{0,3},?\\d{0,3}) shares in ([A-Z]{3,4}) have been sold for \\$(\\d{0,3},?\\d{0,3},?\\d{0,3})."
    let regex = new RegExp(regexString);
    let matches = regex.exec(text);
    if (!matches || matches.length == 0) {
        return null;
    }
    console.log(matches[1])

    let count = parseInt(matches[1].replace(/,/,"").replace(/,/,""));
    let amount = parseInt(matches[3].replace(/,/,"").replace(/,/,""));
    return {count:count, share:matches[2],amount:amount}
}

function findEvents() {
    let eventsElements = document.querySelectorAll(".body-wrap .mail-link");
    let stockEvents = [];
    for (let e of eventsElements) {
        let innerText = e.innerText;
        let values = extractValues(innerText);
        if (values) {
            stockEvents.push(values)
        }
    }

    showStocks(stockEvents)
}

function showStocks(stocks) {
    var container = document.querySelector(".mailbox-container");
    var newHTML = document.createElement ('table');
    let headerRow = '<tr><td style="padding:10pt">Name</td><td style="padding:10pt">PRICE</td><td style="padding:10pt">QUANTITY</td></tr>'
    let body = ''
    for (let stock of stocks) {
        body += '<tr><td style="padding:10pt">' + stock.share + '</td><td style="padding:10pt">' + stock.amount + '</td><td style="padding:10pt">' + stock.count + "</td></tr>"
    }
    newHTML.innerHTML = headerRow + body;
    container.appendChild (newHTML);
}

(function() {
    'use strict';
    setTimeout(findEvents,2000);

})();