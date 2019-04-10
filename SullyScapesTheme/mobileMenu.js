var mobileMenu = document.getElementById('mobileMenuItems');

var toggleMenuScreenOn = function(){
    mobileMenu.style.display = "flex";
}

var toggleMenuScreenOff = function(){
    mobileMenu.style.display = "none";
}

var windowWidth = window.innerWidth;

var mobileMenuVisible = function(){

    windowWidth = window.innerWidth;
    if(windowWidth >= 960){
    toggleMenuScreenOff();
    }
}

window.addEventListener('resize', mobileMenuVisible());

mobileMenuVisible();
