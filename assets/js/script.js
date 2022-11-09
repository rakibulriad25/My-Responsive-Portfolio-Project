

/* Event Listener */

const addEventOnListener = function (elements, eventType, callback) {
    for(let i=0, len = elements.length; i < len; i++)
    {
        elements[i].addEventListener(eventType, callback);

    }
}

// Preloader

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function (){
     preloader.classList.add("loaded");
     this.document.body.classList.add("loaded");
})

// Toggle

const navbar = document.querySelector("[data-navbar]");
const navtoggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
}

navtoggler.addEventListener("click", toggleNavbar);


// Header active when window scrolled to 50px

const header = document.querySelector("[data-header]");

const activeHeader = function () {
    if (window.scrollY > 50){
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
    
}

window.addEventListener("scroll", activeHeader);


