// =============FULL SCREEN============

const fullScreenBtn = document.getElementById('full-screen')
function getFullscreenElement(){
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
}
function toggleFullScreen(){
    if(getFullscreenElement()){
        document.exitFullscreen();
        fullScreenBtn.classList.remove('active-fullscreen');

    }else{

        document.documentElement.requestFullscreen().catch(console.log);
        fullScreenBtn.classList.add('active-fullscreen');
    }
}
// document.addEventListener("dblclick", () =>{
//     toggleFullScreen();
// });

const navbutton = document.querySelectorAll('.nav-button');
navbutton.forEach(navbuttonel => {
    navbuttonel.addEventListener('click', () => {
        document.querySelector(".loader").classList.remove("hidden");
    });
});
function activeLoader(){
    document.querySelector(".loader").classList.remove("hidden");
}
function hideLoader(){
    document.querySelector(".loader").classList.add("hidden");
}

$(function() {
    $('img.lazy').lazyload();
});
