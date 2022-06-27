// ==UserScript==
// @name         Auto Refresh pgg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sklep.pgg.pl/
// @match        https://sklep.pgg.pl/koszyk
// @match        https://sklep.pgg.pl/koszyk/dodaj-produkt
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

var x3 = document.getElementsByClassName("txt");
var x4 = document.getElementById("main-frame-error");
    if(x3.length==2 || x4!=null)
    {
        location.reload();
    }
