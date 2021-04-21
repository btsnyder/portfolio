window.onload = async function (){
    var id = null;
    let skills = ["C#", "Python"];
    element = document.getElementById("skills");
    
    for (i = 0; i < skills.length; i++) {
        var opacity = 0;
        var top = 0;
        element.style.opacity = "0%";
        element.style.top = "0px";
        element.innerHTML = skills[i];
        for (j = 0; j < 100; j++) {
            element.style.opacity = j + "%";
            await new Promise(r => setTimeout(r, 5));
        }
        await new Promise(r => setTimeout(r, 500));
        for (j = 100; j > 0; j--) {
            element.style.opacity = j + "%";
            element.style.top = -0.5 * (100 - j) + "px";
            await new Promise(r => setTimeout(r, 5));
        }
        if (i == skills.length - 1) {
            i = -1;
        }
    }
}

window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var home = document.getElementById("homenav");
var projects = document.getElementById("projectnav");

var sticky = menu.offsetTop;
var homeoffset = home.offsetTop;
var projectoffset = projects.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }

  if (window.pageYOffset < projectoffset) {
    home.classList.add("active");
    projects.classList.remove("active");
  } else if (window.pageYOffset >= projectoffset) {
    home.classList.remove("active");
    projects.classList.add("active");
  }
}