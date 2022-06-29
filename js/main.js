//Main section, the one that has the canvas inside
let $mainSection = document.getElementById('mainSection');

//Offcanvas itself
$offcanvas = document.getElementById('offcanvasResponsive')

//Sections elements
$home = document.getElementById('homeSection');
$technicalSkills = document.getElementById('technicalSkillsSection')
$projects = document.getElementById('projectsSection')

//Elements' "y" position
home_Y = $home.offsetTop;
technicalSkills_Y = $technicalSkills.offsetTop;
projects_Y = $projects.offsetTop;

//Canvas links
let $canvasHome = document.getElementById('canvasHome');
let $canvasTechnicalSkills = document.getElementById('canvasTechnicalSkills');
let $canvasProjects = document.getElementById('canvasProjects');

//window scroll
function scrollToElement(element){
    window.scroll(0, element.offsetTop);
}

//EventListeners
$canvasHome.addEventListener('click', e =>{
    scrollToElement($home);
});
$canvasTechnicalSkills.addEventListener('click', e =>{
    scrollToElement($technicalSkills);
});
$canvasProjects.addEventListener('click', e =>{
    scrollToElement($projects);
});


