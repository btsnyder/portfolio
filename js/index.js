var skills = ["C#", "Python", "SQL", "HTML", "NoSQL", "Google Cloud Platform", ".Net Framework", "Auth0", "Couchbase", "Django", "CSS", "Agile Framework", "Jira", 
              "REST", "Machine Vision", "OpenCV", "Git", "Xamarin", "UWP", "XML"];
// copy skills so that we can remove them from the array
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
        skills_copy.splice(randomIndex, 1); // remove the selected skill
        // fade in
        for (j = 0; j < 100; j++) {
            element.style.opacity = j + "%";
            await new Promise(r => setTimeout(r, 5));
        }
        // wait for display
        await new Promise(r => setTimeout(r, 500));
        // fade out and move up
        for (j = 100; j > 0; j--) {
            element.style.opacity = j + "%";
            element.style.top = -0.5 * (100 - j) + "px";
            await new Promise(r => setTimeout(r, 5));
        }
        // if we are to the end of the list replenish
        if (skills_copy.length == 0) {
            i = -1;
            skills_copy = JSON.parse(JSON.stringify(skills));
        }
    }
}

var clicked = null;

/**
 * Navigate to an id on the page and highlight the menu item
 * @param {string} id item to navigate to
 */
function goToLocation(id) {
  clicked = id;
  location.href=id;

  homenav.classList.remove("active");
  projectnav.classList.remove("active");
  contactnav.classList.remove("active");
  resumenav.classList.remove("active");

  switch (id)
  {
    case "#header":
      homenav.classList.add("active");
      break;
    case "#projects":
      projectnav.classList.add("active");
      break;
    case "#contact":
      contactnav.classList.add("active");
      break;
    case "#resume":
      resumenav.classList.add("active");
      break;
    default:
      console.log("unknown nav id");
      break;
  }
}

// store value of menu for "sticky" effect of menu
var sticky = menu.offsetTop;

/**
 * Handles the sticky menu and highlighting the navigation menu
 */
window.onscroll = function () {
  // have the menu be sticky if it's non-mobile
  var menu = document.getElementById("menu");
  if (window.pageYOffset > sticky && window.innerWidth > 1000) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
  // if scrolled due to a menu click let that handle the highlighting,
  // otherwise do it here
  if (clicked) {
    clicked = false;
    return;
  }
  var homenav = document.getElementById("homenav");
  var projectnav = document.getElementById("projectnav");
  var projects = document.getElementById("projects");
  var contactnav = document.getElementById("contactnav");
  var contact = document.getElementById("contact")
  var resumenav = document.getElementById("resumenav");
  if (window.pageYOffset + window.innerHeight < projects.offsetTop) {
    homenav.classList.add("active");
    projectnav.classList.remove("active");
    contactnav.classList.remove("active");
    resumenav.classList.remove("active");
  } else if (window.pageYOffset + window.innerHeight >= projectnav.offsetTop && 
             window.pageYOffset + window.innerHeight < contact.offsetTop) {
    homenav.classList.remove("active");
    projectnav.classList.add("active");
    contactnav.classList.remove("active");
    resumenav.classList.remove("active");
  }
  else if (window.pageYOffset + window.innerHeight >= contact.offsetTop && 
    window.pageYOffset + window.innerHeight < resume.offsetTop) {
    homenav.classList.remove("active");
    projectnav.classList.remove("active");
    contactnav.classList.add("active");
    resumenav.classList.remove("active");
  }
  else {
    homenav.classList.remove("active");
    projectnav.classList.remove("active");
    contactnav.classList.remove("active");
    resumenav.classList.add("active");
  }
}

// store what project is showing
var showing = null;
/**
 * Handles when a project is clicked. Will hide the currently showing project if there is one
 * @param {string} id project to show
 */
async function showProject(id){
  var element = document.getElementById(id);
  // if we have a project showing already
  if (showing != null)
  {
    // hide the project
    document.getElementById(showing).classList.remove("project_show");
    document.getElementById(showing + "_descpt").classList.remove("shown");
    document.getElementById(showing + "_lbl").classList.remove("shown");
    // if we click the showed project
    if (element.id == showing)
    {
      // move contact section back up
      document.getElementById("contact").style.marginTop = "0px";
      showing = null;
      return;
    }
  }
  showing = element.id;  
  element.classList.add("project_show");
  await new Promise(r => setTimeout(r, 500));
  // make sure we are still the same click event
  if (element.id == showing)
  {
    document.getElementById(id + "_lbl").classList.add("shown");
    document.getElementById(id + "_descpt").classList.add("shown");
    // adjust bottom sections, since descriptions are absolute to allow for overlap
    document.getElementById("contact").style.marginTop = (document.getElementById(id + "_descpt").offsetHeight) + "px";
  }
  else
  {
    element.classList.remove("project_show");
  }
}

/**
 * Send mail through client using email section entry
 */
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
