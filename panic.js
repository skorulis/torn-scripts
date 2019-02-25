// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.torn.com/*
// @grant        none
// ==/UserScript==

function extractBalance(text) {
    let regexString = "^You have \\$(\\d{0,3},?\\d{0,3},?\\d{0,3},?\\d{0,3})"
    let regex = new RegExp(regexString);
    let matches = regex.exec(text);
    if (!matches || matches.length == 0) {
        return null;
    }
    return matches[1]
}

let moneyAutoSet = false;

function setDefaultMoneyValue() {
    if (moneyAutoSet) {
        return; //Only do this once 
    }
    let donateBox = document.querySelector("div.donate-wrap.cont-gray");
    if (!donateBox) {
        return;
    }

    let moneyText = donateBox.querySelector(".info").innerText;
    let moneyValue = extractBalance(moneyText);

    let input = donateBox.querySelector("input.amount.input-money");

    input.value = moneyValue;
    moneyAutoSet = true;
}

function checkSafety() {
    let link = document.querySelector("div#tcLogo.logo a");
    if (link) {
        link.href = "https://www.torn.com/factions.php?step=your#/tab=armoury";
    }
    
    setDefaultMoneyValue();    
}

(function() {
    'use strict';
    setInterval(checkSafety,100);

})();