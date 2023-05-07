var swiper = new Swiper(".itemimage", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: {
  delay: 4500,
  disableOnInteraction: false,
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".popcontent", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: false,
  loopFillGroupWithBlank: true,
  autoplay: {
  delay: 4500,
  disableOnInteraction: false,
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".imgslider", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
  delay: 4500,
  disableOnInteraction: false,
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slidermain1", {
  slidesPerView: 2,
  spaceBetween: 5,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".slidermain2", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".slidermain3", {
  slidesPerView: 2,
  spaceBetween: 5,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
});
var swiper = new Swiper(".slidermain4", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".slidermain5", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".slidermain6", {
  slidesPerView: 2,
  spaceBetween: 5,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next6",
      prevEl: ".swiper-button-prev6",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
});
var swiper = new Swiper(".slidermain7", {
  slidesPerView: 2,
  spaceBetween: 5,
  centerSlide:'true',
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
  },navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
});
var swiper = new Swiper(".mainbannerswip", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-banner",
    clickable: true,
  },
  // // navigation: {
  //   nextEl: ".swiper-button-next-banner",
  //   prevEl: ".swiper-button-prev-banner",
  // },
});
function updateCartCounter(){
  var cartcounter = document.getElementById("cartcounter");
  const cartcountxreq = new XMLHttpRequest();
  reactURL = "action.php?cartcount=1";
  cartcountxreq.open("GET", reactURL);
  cartcountxreq.send();
  cartcountxreq.responseType = "text";
  cartcountxreq.onload = () => {
    if (cartcountxreq.readyState == 4 && cartcountxreq.status == 200) {
      cartCountData = cartcountxreq.response;
      cartcounter.innerText = cartCountData;
      
    } else {
      console.log(`Error: ${cartcountxreq.status}`);
    }
  };

}
function updateCartCalc(){
  var cartsubtotal = document.getElementById("cartsubtotal");
  var carttotal = document.getElementById("carttotal");

  let itemssubtotal = document.querySelectorAll(".itemsubtotal");
  var total = 0;
  itemssubtotal.forEach(function(n){
    total += +n.attributes.value.value;
  });
  total = Math.round((total + Number.EPSILON) * 100) / 100;
  cartsubtotal.innerText = "Rs." + total;
  carttotal.innerText = "Rs." + total;
}
updateCartCounter();
const hamb = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menubar");
const header = document.querySelector(".header");
const headbtn = document.getElementById('head-btn');
const logobar = document.querySelector(".logo-bar");
const navclosebtn = document.querySelector("#navclosebtn");


headbtn.addEventListener("click", () => {
    headbtn.classList.toggle("active");
    header.classList.toggle("active");
})

navclosebtn.addEventListener("click", ()=>{
    console.log("Test");
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headbtn.classList.remove("deactive");
    logobar.classList.remove("active");
});
navMenu.addEventListener("click", ()=>{
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headbtn.classList.remove("deactive");
    logobar.classList.remove("active");
})

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    headbtn.classList.toggle("deactive");
    logobar.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headbtn.classList.remove("deactive");
    logobar.classList.remove("active");
}));

var popupview = document.getElementById("popupview");
var itemimg = document.getElementById("itemimg");
var imgslider = document.getElementById("imgslider");
var popclose = document.getElementById("popclose");


window.onclick = function(event) {
  if (event.target == popupview) {
    popupview.style.display = "none";
  }
}
const hurtbtn = document.querySelectorAll(".hurtbtn");
hurtbtn.forEach(n => n.addEventListener("click", () => {
  // console.log(n.attributes.itemid.value);
  const reactxreq = new XMLHttpRequest();
  reactURL = "action.php?heart=" + n.attributes.itemid.value;
  reactxreq.open("GET", reactURL);
  reactxreq.send();
  reactxreq.responseType = "text";
  reactxreq.onload = () => {
    if (reactxreq.readyState == 4 && reactxreq.status == 200) {
      reactdata = reactxreq.response;
      // console.log(reactdata);
      if(reactdata == "up"){
        n.classList.toggle("active");
      }else if(reactdata == "down"){
        n.classList.remove("active");
      }

      
    } else {
      console.log(`Error: ${reactxreq.status}`);
    }
  };

}))
var cartdelbtn = document.querySelectorAll(".cartdelbtn");
cartdelbtn.forEach(n => n.addEventListener("click", () => {
  
  const cartdelxreq = new XMLHttpRequest();
  reactURL = "action.php?cartdel=" + n.attributes.value.value;
  // console.log(reactURL);
  cartdelxreq.open("GET", reactURL);
  cartdelxreq.send();
  cartdelxreq.responseType = "text";
  cartdelxreq.onload = () => {
    if (cartdelxreq.readyState == 4 && cartdelxreq.status == 200) {
    reactdata = cartdelxreq.response;
    // console.log(reactdata);
    
    if(reactdata == "deleted"){
      let formid = 'cartform' + n.attributes.value.value;
      var cartform = document.getElementById(formid);
      updateCartCounter();
      // console.log();
      if(document.querySelectorAll(".cartdelbtn").length == 1){
        cartform.innerHTML = `<div class="itembox"><span class="noitem">The cart is empty!</span></div>`;
      }else{
        cartform.remove();
      }
      

      // let cartform = document.getElementById('cartform' + formid);
      // consol.log(cartform.innerHTML);
      
    // 	n.classList.toggle("active");
    // }else if(reactdata == "down"){
    // 	n.classList.remove("active");
    }

    
    } else {
      updateCartCounter();
    console.log(`Error: ${cartdelxreq.status}`);
    }
  };

  }));
const cartbtn = document.querySelectorAll(".cartbtn");
cartbtn.forEach(n => n.addEventListener("click", () => {
  // console.log(n.attributes.itemid.value);
  const cartreactxreq = new XMLHttpRequest();
  reactURL = "action.php?cartreact=" + n.attributes.itemid.value;
  cartreactxreq.open("GET", reactURL);
  cartreactxreq.send();
  cartreactxreq.responseType = "text";
  cartreactxreq.onload = () => {
    if (cartreactxreq.readyState == 4 && cartreactxreq.status == 200) {
      reactdata = cartreactxreq.response;
      // console.log(reactdata);
      if(reactdata == "cartaded"){
        n.classList.toggle("active");
        updateCartCounter();
      }else if(reactdata == "notaded"){
        // n.classList.remove("active");
        updateCartCounter();
      }

      
    } else {
      console.log(`Error: ${reactxreq.status}`);
    }
  };

}));

function updateCartItemValues(qty, itcode){
  let qtyinput = document.getElementById('qtyinput'+ itcode);
  let itemprice = document.getElementById('itemprice' + itcode);
  let itemsubtotal = document.getElementById('itemsubtotal' + itcode);
  let qtyval = document.getElementById('qtyinput'+ itcode);

  const cartupdtxreq = new XMLHttpRequest();
  cartupdtURL = "action.php?cartupdt=" + itcode + "&cartqty=" + qty;
  cartupdtxreq.open("GET", cartupdtURL);
  cartupdtxreq.send();
  cartupdtxreq.responseType = "text";
  cartupdtxreq.onload = () => {
    if (cartupdtxreq.readyState == 4 && cartupdtxreq.status == 200) {
      reactdata = cartupdtxreq.response;
      if(reactdata == "updated"){
        itemsubtotal.attributes.value.value = Math.round(( qty * itemprice.attributes.value.value + Number.EPSILON) * 100) / 100;
        itemsubtotal.innerText ="Rs. " + Math.round(( qty * itemprice.attributes.value.value + Number.EPSILON) * 100) / 100;
        qtyinput.attributes.value.value = qty;
        qtyinput.attributes.placeholder.value = qty;
        
        qtyval.innerText = qty;
        qtyval.attributes.value.value = qty;
        updateCartCalc();
        updateCartCounter();
      }else if(reactdata == "-1"){

        updateCartCounter();
      }      
    } else {
      console.log(`Error: ${reactxreq.status}`);
    }
  };
}

const qtyinc = document.querySelectorAll(".qtyinc");
const qtydec = document.querySelectorAll(".qtydec");
const qtyval = document.querySelectorAll(".qtyinput");

qtyinc.forEach(n => n.addEventListener("click", () => {
  let qtyval = document.getElementById('qtyinput'+ n.attributes.itcode.value);
  qtyval.innerHTML = '<input type="number" name="qty" placeholder="' + qtyval + '" required="" class="qtyval" itcode="'+ n.attributes.itcode.value +'" min="1" oninput="updateCartItemValues(this.value, '+ n.attributes.itcode.value + ');" id="qtyinput' + n.attributes.itcode.value + '" value="'+ qtyval +'">';
  let qty = qtyval.attributes.value.value;
  qty++;
  qtyval.attributes.value.value = qty;
  updateCartItemValues(qty, n.attributes.itcode.value);
}));

qtydec.forEach(n => n.addEventListener("click", () => {
  let qtyval = document.getElementById('qtyinput'+ n.attributes.itcode.value);
  qtyval.innerHTML = '<input type="number" name="qty" placeholder="' + qtyval + '" required="" class="qtyval" itcode="'+ n.attributes.itcode.value +'" min="1" oninput="updateCartItemValues(this.value, '+ n.attributes.itcode.value + ');" id="qtyinput' + n.attributes.itcode.value + '" value="'+ qtyval +'">';
  let qty = qtyval.attributes.value.value;
  qty--;
  if(qty < 1){
    qty = 1;
  }
  updateCartItemValues(qty, n.attributes.itcode.value);
}));

qtyval.forEach(n => n.addEventListener("input", () => {
  console.log(n);
  // let qtyval = document.getElementById('qtyval'+ n.attributes.itcode.value);
  // let qty = qtyval.attributes.value.value;
  // if(qty < 1){
  //   qty = 1;
  // }
  // updateCartItemValues(qty, n.attributes.itcode.value);
}));

const ratebtns = document.querySelectorAll(".ratebtns");
ratebtns.forEach(n => n.addEventListener("click", () => {
  // console.log(n.attributes.itcode.value + " " + n.attributes.ratingvalue.value);
  const ratingxreq = new XMLHttpRequest();
  rateURL = "action.php?ratingvalue=" + n.attributes.ratingvalue.value + "&itcode=" + n.attributes.itcode.value ;
  console.log(rateURL);
  ratingxreq.open("GET", rateURL);
  ratingxreq.send();
  ratingxreq.responseType = "text";
  ratingxreq.onload = () => {
    if (ratingxreq.readyState == 4 && ratingxreq.status == 200) {
      ratedata = ratingxreq.response;
      // console.log(ratedata);
      if(ratedata == "rated"){
        console.log(ratedata);
        // n.classList.toggle("active");
      }else if(ratedata == "notrated"){
        // n.classList.remove("active");
        console.log(ratedata);
      }      
    } else {
      console.log(`Error: ${ratingxreq.status}`);
    }
  };
}));
const itemviewimg = document.querySelectorAll(".item-view-img");
const itemviewbox = document.getElementById("itemviewbox");
var imgviewslider = document.getElementById("imgviewslider");

itemviewimg.forEach(n => n.addEventListener("click", () => {
  // console.log(n.attributes.itemid.value);
  itemviewbox.style.display = "flex";

  URL = "action.php?itemid=" + n.attributes.itemid.value;
  const xhr = new XMLHttpRequest();
  itemviewbox.innerHTML = `<?xml version="1.0" encoding="utf-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(30 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(60 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(90 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(120 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(150 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(180 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(210 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(240 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(270 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(300 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(330 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#28b463">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
    </rect>
  </g>
  <!-- [ldio] generated by https://loading.io/ --></svg>`;
  xhr.open("GET", URL);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      itemdata = xhr.response;
      if(itemdata == 0){
        itemviewbox.innerHTML = "<div>No Item Found</div>";
      }else if(itemdata == -1){
        itemviewbox.innerHTML = "<div>Database Error</div>";
      }else{
          var content;
          content = `
            <div class="itemviewcontent swiper" id="itemviewcontent">
              <span class="close" id="itemviewclose">&times;</span>
              <div id="imgviewslider" class="imgviewslider swiper-wrapper">`;
                


              
          var image1 = itemdata.image1.split("~");
          content += `<a href="#" class="item-img swiper-slide" ><img src="` +  image1[0] +  `" alt="`+ image1[1] +`"></a>`;

          if(itemdata.image2 != "" && itemdata.image2 != "empty"){
            var image2 = itemdata.image2.split("~");
            content += `<a href="#" class="item-img swiper-slide" ><img src="` +  image2[0] +  `" alt="`+ image2[1] +`"></a>`;
          }
          if(itemdata.image3 != "" && itemdata.image3 != "empty"){
            var image3 = itemdata.image3.split("~");
            content += `<a href="#" class="item-img swiper-slide" ><img src="` +  image3[0] +  `" alt="`+ image3[1] +`"></a>`;
          }
          if(itemdata.image4 != "" && itemdata.image4 != "empty"){
            var image4 = itemdata.image4.split("~");
            content += `<a href="#" class="item-img swiper-slide" ><img src="` +  image4[0] +  `" alt="`+ image4[1] +`"></a>`;
          }
          if(itemdata.image5 != "" && itemdata.image5 != "empty"){
            var image5 = itemdata.image5.split("~");
            content += `<a href="#" class="item-img swiper-slide" ><img src="` +  image5[0] +  `" alt="`+ image5[1] +`"></a>`;
          }
          // image1 = itemdata.image1.split("~");
          // image1 = itemdata.image1.split("~");
          // image1 = itemdata.image1.split("~");
          // image1 = itemdata.image1.split("~");
          content += `
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                      </div>`;
                      console.log(content);
          itemviewbox.innerHTML = content;

          var swiper = new Swiper(".itemviewcontent", {
            spaceBetween: 0,
            centeredSlides: true,
            loop: false,
            loopFillGroupWithBlank: true,
            autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            },
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
          });

          var itemviewclose = document.getElementById("itemviewclose");
          
          itemviewclose.onclick = function(){
            itemviewbox.style.display = "none";
          }


          window.onclick = function(event) {
            if (event.target == itemviewbox) {
              itemviewbox.style.display = "none";
            }
          }
      }
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
  
}));


itemimg.onclick = function(){
  popupview.style.display = "flex";
}

popclose.onclick = function(){
  popupview.style.display = "none";
}
