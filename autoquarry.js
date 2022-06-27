// ==UserScript==
// @name         Auto Quarry
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sklep.pgg.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pgg.pl
// @grant        none
// ==/UserScript==





   
    var x = document.getElementsByName("ilosc");

    //alert(x.length);
    var texts = '<input id="NEW" type="hidden" name="ilosc" value="2"></input>';
    var texts2 = '<button type="submit" class="btn btn-primary" style="margin-top: 3px;">' +
                    '<i class="fas fa-shopping-cart"></i>' +
    '</button>'
    var texts3
    //alert(texts);
    /*
    for (let i=0 ; i<30 ; ++i) {
        var y = document.createElement('x');
        //alert(y.name);
        document.querySelector('[method="POST"]').appendChild(y);
        y.outerHTML = texts;
    }
    */
    let elements2 = document.querySelectorAll('.row.mt-4.justify-content-center');
    let temp = document.querySelector('.shop')
    let elements = temp.querySelectorAll('.text-dark');
    //alert(elements.length);

    for(var j=0;j<elements.length;++j)
    {
        if(!elements[j].textContent.includes("worków"))
        {
            elements2[j].setAttribute("id","remove");
        }

    }
    let temps2 = document.querySelectorAll('#remove');
    //alert(temps2.length);
    for( let temps of temps2) temps.remove();






    for( var exe1 of x)
    {
        exe1.outerHTML=texts;

    }
    var x1 = document.getElementsByName("ilosc");

    for( var exe2 of x1)
    {

        exe2.outerHTML=texts;

    }

    var x2 = document.getElementsByClassName("btn btn-primary");

    for( var exe3 of x2)
    {



        exe3.outerHTML=texts2;


    }

    var x3 = document.forms;

    for( var exe4 of x3)
    {


        exe4.setAttribute("target","_blank");
        //exe4.setAttribute("id","formsumbit");
    }


   //var sound = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3');

    var condition = true;
    var finds = document.querySelectorAll('.col-4.col-md-2.pt-3.text-center');
    //alert(finds.length);
    for( var elem of finds)
    {
        if(elem.textContent.includes("Dostępny"))
        {
            condition = false;
            break;
        }

    }

    if(condition)
    {
        location.reload();
    }
    else
    {
        //alert("WRRR");
        //window.open("https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3","_blank");
        function cling ()
        {
            var win = window.open('https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3','','width=,height=,resizable=no');
            setTimeout(function () {win.close()},900);
        }

        cling()
        var newint = setInterval(cling,1000);

        function onclick() {
            clearInterval(newint);
        }


    document.addEventListener('click', onclick, false);


    }
