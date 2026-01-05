$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,             // শেষের পর আবার শুরু হবে
      margin: 10,             // স্লাইডের মাঝে ফাঁকা জায়গা
      nav: true,              // previous / next arrow দেখাবে
      autoplay: true,         // অটো স্লাইড হবে
      autoplayTimeout: 3000,  // ৩ সেকেন্ড পর পর পরিবর্তন হবে
      responsive:{
        0:{ items:1 },        // মোবাইলে ১টা স্লাইড
        600:{ items:2 },      // ট্যাবলেটে ২টা
        1000:{ items:3 }      // ডেস্কটপে ৩টা
      }
    });
  });



let load = document.getElementById("loader-3");

window.addEventListener("load",function(){
  this.setTimeout(function(){
    load.style.display="none";},2000)
  
 
})