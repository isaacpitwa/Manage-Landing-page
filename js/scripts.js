showSlides();
var startIndex=1;
var endIndex = (startIndex + 3);
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
//   Hide all the Slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   display first 3 slides
  for (let index = startIndex; index < (startIndex+3); index++) {
    //   if(startIndex>slides)
        const slideIndex = index>slides.length? (index-(slides.length-1)):index
        console.log(`Slide Index:${slideIndex}`)
      const element = slides[slideIndex];
      element.style.display = "block"
  }
//   Remove first slide and add next slide at the end
    startIndex++;
    if (startIndex >= slides.length) {startIndex=1}
//   slideIndex.shift();
//   slideIndex[0].style.display = "none"
//   slides[3].style.display = "block"
//   slideIndex.push(slides[3]);
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}