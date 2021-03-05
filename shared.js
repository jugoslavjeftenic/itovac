// glitch
var things = ['itovac.iz.rs'];
var junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?','X'];

function randomInt(min, max) {
    return Math.round(min + (Math.random() * (max-min)));
}

(function tick() {
    var txt = things[randomInt(0, things.length-1)];
    var chars = txt.split('');
    var glitch = randomInt(0, 1);
    for (var i = 0; i < glitch; i++)
    {
      chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
    }
    txt = chars.join('');
    var x = document.getElementById('brand');
    x.innerHTML = txt;
    window.setTimeout(tick, randomInt(10,1000));
})();

// mobilemenu
var backdrop = document.querySelector('div.backdrop');
var navBarHamburger = document.querySelector('nav > .nav-bar__hamburger');
var navBarHamburgerImg = document.querySelector('nav > .nav-bar__hamburger img');
var navBar = document.querySelector('nav.nav-bar');
var navBarBrand = document.querySelector('nav > .nav-bar__brand');
var navBarMainItems = document.querySelector('nav > .nav-bar__main-items');
var navBarPageItems = document.querySelector('nav > .nav-bar__page-items');
var navBarPageItemsArray = document.querySelectorAll('nav > .nav-bar__page-items a');


window.addEventListener('resize', closeMobileMenu);
navBarHamburger.addEventListener('click', openMobileMenu, true);
backdrop.addEventListener('click', closeMobileMenu);

for (let i = 0; i < navBarPageItemsArray.length; i++) {
    navBarPageItemsArray[i].addEventListener('click', closeMobileMenu);
}

function openMobileMenu () {
    backdrop.style.display = 'block';
    navBarHamburger.style.display = 'none';
    navBarHamburgerImg.style.display = 'none';
    navBarBrand.style.display = 'block';
    navBarMainItems.style.display = 'inline-block';
    navBarPageItems.style.display = 'inline-block';
    if (window.innerWidth >= 540) {
        navBar.style.width = '485px';
    } else {
        navBar.style.width = '250px';
    }
}

function closeMobileMenu () {
    if (window.innerWidth >= 1200) {
        navBarHamburger.style.display = 'none';
        navBarHamburgerImg.style.display = 'none';
        navBarBrand.style.display = 'block';
        navBarMainItems.style.display = 'block';
        navBarPageItems.style.display = 'block';
        navBar.style.width = '250px';
        backdrop.style.display = 'none';
        return;
    }
    navBarBrand.style.display = 'none';
    navBarMainItems.style.display = 'none';
    navBarPageItems.style.display = 'none';
    navBar.style.width = '50px';
    navBarHamburger.style.display = 'block';
    navBarHamburgerImg.style.display = 'block';
    backdrop.style.display = 'none';
}
