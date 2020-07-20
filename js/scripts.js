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
  if (x == "") {
    return "Email Address is Required";
  }
  if(!re.test(x)){
    return "Email Address is Invalid"
  }
}