showSlides();
var startIndex = 1;
var endIndex = (startIndex + 2);
var slidesShowing = []
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  //   Hide all the Slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (i >= startIndex) {
      slides[i].style.display = "block";
      slidesShowing.push(slides[i]);
      if (i == 2 && slidesShowing.length < 3) {
        console.log("UPdating Slides")
        for (var j = 1; (slidesShowing.length + j) < 3; j++) {
          slides[0].style.display = "block";
        }

      }
      console.log(startIndex)
    }
  }
  startIndex++;
  if (startIndex > slides.length) {
    console.log("StartIndex is greater than 3:");
    startIndex = 1; slidesShowing = []
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}