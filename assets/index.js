/*-----------------scroll to top start---------------------*/
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
/*-----------------scroll to top end-----------------------*/

let burger = document.querySelector(".burgerIcon");
let menuItems = document.querySelector(".menu-items");
let menuItem = document.querySelectorAll(".menu-item");

burger.addEventListener("click", change);

function change() {
    burger.classList.toggle("red");
    menuItems.classList.toggle("menu-items-mob");

    if(menuItems.classList.contains("menu-items-mob")){
        menuItem.forEach(function(e){
        e.classList.add("menu-item-mob")
    }) 
       
    
} else {
    menuItem.forEach(function(e){
        e.classList.remove("menu-item-mob")
    }) 
} 
}

menuItem.forEach(function(e){
    e.addEventListener("click", close);
    })


    function close() {
        menuItems.classList.remove("menu-items-mob");
    }



