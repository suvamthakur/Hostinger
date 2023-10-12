// Navbar shadow
var nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(window.scrollY>20) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
};

//Timer
var d=2;
var h=18;
var m=9;
var s=26;

var day = document.querySelector(".day-box");
var hr = document.querySelector(".hr-box");
var min = document.querySelector(".min-box");
var sec = document.querySelector(".sec-box");

day.innerHTML = ((d<10)?"0":"") + d;
hr.innerHTML = ((h<10)?"0":"") + h;
min.innerHTML = ((m<10)?"0":"") + m;
sec.innerHTML = ((s<10)?"0":"") + s;

setInterval(function() {
    s--;
    sec.innerHTML = ((s<10)?"0":"") + s;
    if(s==0) {
        m--;
        min.innerHTML= ((m<10)?"0":"") + m;
        s=60;
        if(m==0) {
            h--;
            hr.innerHTML = ((h<10)?"0":"") + h;
            m=60;
            if(h==0) {
                d--;
                day.innerHTML = ((d<10)?"0":"") + d;
                h=24;
            }
        }
    }
}, 1000);

// Navbar (hamburger)
var menu = document.querySelector(".menu-box");
var list = document.querySelector(".nav-list");
menu.addEventListener("click", function() {
    menu.classList.toggle("active");
    list.classList.toggle("active");
});

// Footer links
var columns = document.querySelectorAll(".about-column");
var columnList = document.querySelectorAll(".column-list");
for(var i=0;i<columns.length;i++) {
    var dropdown = document.querySelectorAll(".about-column")[i];
    dropdown.addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

