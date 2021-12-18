function imageHover(image){
  image.style.boxShadow = "5px 5px 8px rgb(0,0,0,0.5)";
  image.style.transitionDuration = "0.2s";
  image.style.cursor = "pointer";
}

function imageLeave(image){
  image.style.boxShadow = "0px 0px 0px rgb(0,0,0,0)";
  image.style.transitionDuration = "0.2s";
}

function getAbout() {
    location.href = 'about.html';
}

function getWriteMe() {
    location.href = 'writeme.html';
}

function getHome() {
    location.href = 'home.html';
}

function getInterest() {
    location.href = 'interests.html';
}
