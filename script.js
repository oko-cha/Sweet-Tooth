  

    let navlinks = document.querySelector(".nav-links")

    let openNavButton = document.querySelector(".btn-open-menu")
  
    let closeNavbutton = document.querySelector(".btn-close-menu")
   
 openNavButton.addEventListener("click",function(){
    // openNavButton.style.color="black"

    navlinks.classList.add("show-nav")
    closeNavbutton.style.display="block"
    openNavButton.style.display="none"
})
closeNavbutton.addEventListener("click",function(){
    navlinks.classList.remove("show-nav")
    openNavButton.style.display="block"
    closeNavbutton.style.display="none"


 })


// function topSellers(){

//   const seller = document.getElementById("top1");
//   if(seller.style.display === "none"){
//     seller.style.display = "block";
//   }
//   else{
//     seller.style.display = "none";
//   }
// }

// const topBtn = document.getElementById("topBtn");
// const bestBtn = document.getElementById("bestBtn");

// const topSellers = [
    
//     "top1","top3","top5","top7"
//   ];

//   const bestSellers = [
//     "best2","best4",
//     "best6","best8","best10"
//   ];

//   // Helper functions
//   function showCards(cardArray) {
//     cardArray.forEach(id => {
//       const el = document.getElementById(id);
//       if (el) el.style.display = "block";
//     });
//   }

//   function hideCards(cardArray) {
//     cardArray.forEach(id => {
//       const el = document.getElementById(id);
//       if (el) el.style.display = "none";
//     });
//   }

//   // Click Events
//   topBtn.onclick = () => {
//     showCards(topSellers);
//     hideCards(bestSellers);
//   };

//   bestBtn.onclick = () => {
//     showCards(bestSellers);
//     hideCards(topSellers);
//   };







