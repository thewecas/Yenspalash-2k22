
inter = document.getElementById('inter');
dayOne = document.getElementById("dayOne");
dayTwo = document.getElementById("dayTwo");
dayThree = document.getElementById("dayThree");
intrClg = document.getElementById("intrClg");
b1 = document.getElementById("d1");
b2 = document.getElementById("d2");
b3 = document.getElementById("d3");


inter.setAttribute('style', 'background: #171a24 ; border-color:aqua;');


function changePage(ids) {

    if (ids == "inter") {
        inter.setAttribute('style', 'background:#0b121b ; border-color:aqua;');
        b1.setAttribute('style', 'background: #161616');
        b2.setAttribute('style', 'background: #161616');
        b3.setAttribute('style', 'background: #161616');
        intrClg.setAttribute('style', 'display: grid ;');
        dayOne.setAttribute('style', 'display: none');
        dayTwo.setAttribute('style', 'display: none');
        dayThree.setAttribute('style', 'display: none');
    }

    if (ids == "d1") {
        inter.setAttribute('style', 'background: #161616');
        b1.setAttribute('style', 'background:#0b121b ; border-color:aqua;');
        b2.setAttribute('style', 'background: #161616');
        b3.setAttribute('style', 'background: #161616');
        intrClg.setAttribute('style', 'display: none ;');
        dayOne.setAttribute('style', 'display: grid ;');
        dayTwo.setAttribute('style', 'display: none');
        dayThree.setAttribute('style', 'display: none');
    }
    else if (ids == "d2") {
        inter.setAttribute('style', 'background: #161616');
        b2.setAttribute('style', 'background:#0b121b ; border-color:aqua;');
        b3.setAttribute('style', 'background: #161616');
        b1.setAttribute('style', 'background: #161616');
        intrClg.setAttribute('style', 'display: none ;');
        dayOne.setAttribute('style', 'display: none');
        dayTwo.setAttribute('style', 'display: grid');
        dayThree.setAttribute('style', 'display: none');
    }
    else if (ids == "d3") {
        inter.setAttribute('style', 'background: #161616');
        b3.setAttribute('style', 'background: #0b121b ; border-color:aqua;');
        b2.setAttribute('style', 'background: #161616');
        b1.setAttribute('style', 'background: #161616');
        intrClg.setAttribute('style', 'display: none ;');
        dayOne.setAttribute('style', 'display: none');
        dayTwo.setAttribute('style', 'display: none');
        dayThree.setAttribute('style', 'display: grid');

    }



}



function showInfo(ids) {
    console.log(ids);
    document.getElementById(ids + 'btns').setAttribute('style', 'display:none');
    document.getElementById(ids + 'title').setAttribute('style', 'display:none');
    document.getElementById(ids + 'img').setAttribute('style', 'display:none');
    document.getElementById(ids + 'info').setAttribute('style', 'display:block');
}

function goBack(ids) {
    ids = ids.substring(0, 3);

    console.log(ids);
    console.log(ids + 'img');
    document.getElementById(ids + 'btns').setAttribute('style', 'display:flex');
    document.getElementById(ids + 'title').setAttribute('style', 'display:flex');
    document.getElementById(ids + 'img').setAttribute('style', 'display:block');
    document.getElementById(ids + 'info').setAttribute('style', 'display:none');
}