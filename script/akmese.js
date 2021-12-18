var image = document.getElementById("avatar");
image.onmouseover = function() {  image.src = "./images/vesikalık.jpg"; }
image.onmouseout = function() {  image.src = "./images/avatar.png"; }


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
