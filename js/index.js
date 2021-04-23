var skills = ["C#", "Python", "SQL", "HTML", "NoSQL", "Google Cloud Platform", ".Net Framework", "Auth0", "Couchbase", "Django", "CSS", "Agile Framework", "Jira", 
              "REST", "Machine Vision", "OpenCV", "Git", "Xamarin", "UWP", "XML"];
var skills_copy = JSON.parse(JSON.stringify(skills));

window.onload = async function (){
    var id = null;
    element = document.getElementById("skills");
    
    for (i = 0; i < skills.length; i++) {
        var opacity = 0;
        var top = 0;
        element.style.opacity = "0%";
        element.style.top = "0px";

        var randomIndex = Math.floor(Math.random()*skills_copy.length);
        element.innerHTML = skills_copy[randomIndex];
        skills_copy.splice(randomIndex, 1);
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
        if (skills_copy.length == 0) {
            i = -1;
            skills_copy = JSON.parse(JSON.stringify(skills));
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

$(document).ready(function(){
  var left = false;
  $("#wood").hover(async function(){
    left = false;
    await new Promise(r => setTimeout(r, 500));
    for (k = 0; k < 100; k++) {
      if (left) {
        break;
      }
      $("#woodp").css("opacity", k + "%");
      await new Promise(r => setTimeout(r, 5));
    }
    }, function(){
      left = true;
      $("#woodp").css("opacity", "0%");
  });
});