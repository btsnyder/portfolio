var skills = ["C#", "Python", "SQL", "HTML", "NoSQL", "Google Cloud Platform", ".Net Framework", "Auth0", "Couchbase", "Django", "CSS", "Agile Framework", "Jira", 
              "REST", "Machine Vision", "OpenCV", "Git", "Xamarin", "UWP", "XML"];
var skills_copy = JSON.parse(JSON.stringify(skills));

window.onload = async function (){
    var id = null;
    element = document.getElementById("skills_p");
    
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
var projectnav = document.getElementById("projectnav");
var projects = document.getElementById("projects");
var contactnav = document.getElementById("contactnav");
var contact = document.getElementById("contact")
var resumenav = document.getElementById("resumenav");
var resume = document.getElementById("resume")

var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky && window.innerWidth > 1000) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
  if (window.pageYOffset + window.innerHeight < projects.offsetTop) {
    home.classList.add("active");
    projectnav.classList.remove("active");
    contactnav.classList.remove("active");
    resumenav.classList.remove("active");
  } else if (window.pageYOffset + window.innerHeight >= projectnav.offsetTop && 
             window.pageYOffset + window.innerHeight < contact.offsetTop) {
    home.classList.remove("active");
    projectnav.classList.add("active");
    contactnav.classList.remove("active");
    resumenav.classList.remove("active");
  }
  else if (window.pageYOffset + window.innerHeight >= contact.offsetTop && 
    window.pageYOffset + window.innerHeight < resume.offsetTop) {
    home.classList.remove("active");
    projectnav.classList.remove("active");
    contactnav.classList.add("active");
    resumenav.classList.remove("active");
  }
  else {
    home.classList.remove("active");
    projectnav.classList.remove("active");
    contactnav.classList.remove("active");
    resumenav.classList.add("active");
  }
}

var showing = null;

async function showProject(id){
  var element = document.getElementById(id);
  if (showing != null)
  {
    document.getElementById(showing).classList.remove("project_show");
    document.getElementById(showing + "_descpt").classList.remove("shown");
    document.getElementById(showing + "_lbl").classList.remove("shown");
    if (element.id == showing)
    {
      document.getElementById("contact").style.marginTop = "0px";
      showing = null;
      return;
    }
  }
  showing = element.id;  
  element.classList.add("project_show");
  await new Promise(r => setTimeout(r, 500));
  if (element.id == showing)
  {
    document.getElementById(id + "_lbl").classList.add("shown");
    document.getElementById(id + "_descpt").classList.add("shown");
    document.getElementById("contact").style.marginTop = (document.getElementById(id + "_descpt").offsetHeight) + "px";
  }
  else
  {
    element.classList.remove("project_show");
  }
}

function sendMail() {
  var first = document.getElementById("email_first").value;
  var last = document.getElementById("email_last").value;
  var subject = document.getElementById("email_subject").value;
  var body = document.getElementById("email_body").value;
  window.open(`mailto:bsnyder@nnu.edu?subject=${subject} - ${first} ${last}&body=${body}`);
}

function downloadResume() {
  window.open('https://drive.google.com/uc?export=download&id=1aIVY1gKueoZ0jSqshsnEw9mBbHfNOQ-f')
}
