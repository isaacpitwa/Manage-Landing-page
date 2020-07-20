$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 3
      }
    }

  });

});

function validateForm() {
  const re = /\S+@\S+\.\S+/;
  var x = document.forms["subscriptionForm"]["email"].value;
  var text =""
  if (x == "") {
    text= "Email Address is Required";
  }
  if(!re.test(x)){
    text = "Email Address is Invalid"
    
  }
  document.getElementById("error-msg").innerHTML = text;
}