/* 
File Created Date : 09/02/2023
Programmer : Sahan Kaushalya
Email : mkskaushalya@gmail.com
Last Update : 10/02/2023
Study in Sri Lanka - Web Portal
*/

// Hambergar
const hamb = document.querySelector(".hamburger");
const topnav = document.querySelector(".top-navbar");
const mainnav = document.querySelector(".main-navbar");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    topnav.classList.toggle("active");
    mainnav.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamb.classList.remove("active");
    topnav.classList.remove("active");
    mainnav.classList.remove("active");
}));

// Loader
window.addEventListener("load", function(){
    document.querySelector(".loader").classList.add("hidden");
});

$(document).ready(function(){
    $("#contformsubmit").click(function(event){
        document.getElementById("contact-form-proccess").style.display = "flex";
        event.preventDefault();
        var formData = $("#contact-form").serialize();
        var contname = $("#contname").val();
        var contemail = $("#contemail").val();
        var contphone = $("#contphone").val();
        var contsubject = $("#contsubject").val();
        var contmessage = $("#contmessage").val();
        var getURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfG7iKG_k3FVL-VRjrXs4cymw2fkwdvsFPkytGYnaTn4zpLaA/formResponse?usp=pp_url&entry.24391898=" + contname + "&entry.1389486660=" + contemail + "&entry.2045416024=" + contphone + "&entry.1127240515=" + contsubject + "&entry.765311988=" + contmessage;
        var localGetURL = "/letstalk/inc/run/action.php?contformsubmit=contformsubmit&contname="+ contname + "&contemail=" + contemail + "&contphone=" + contphone + "&contsubject=" + contsubject + "&contmessage=" + contmessage;
        $.get(localGetURL, function(data, status){
            console.log(data);
            if(data == "Success"){
                document.getElementById("contact-form-proccess").style.display = "none";
                $("#contact-form").html("<h2>Form Submitted</h2>");
            }
        
        }
        );
        // console.log(getURL);
        $.get(getURL, function(data, status){
            }
        );
        

        

    })
});

$(function(){
    $('img.lazy').lazyload();
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    lazy: true,
    rewind: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      530: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },1450: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });


const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 400,
    // reset: true
});

sr.reveal('.ups, .team-name, .occard, .mySwiper, .headline, .eventdescription, .midline, .evntcard, .eventdetcard, .mid, .nav, .ypsl, .imgcard, .contcard');
sr.reveal(`.headline`, {interval: 300})
sr.reveal(`.tagline`, {interval: 600, delay: 600})
sr.reveal(`.apply-btn`, {interval: 900, delay: 800})
sr.reveal(`.left, .letstalk, .intro`, {origin: 'left'})
sr.reveal(`.right, .ieeesl, .useful`, {origin: 'right'})
sr.reveal(`.copy`, {origin: 'top'})
