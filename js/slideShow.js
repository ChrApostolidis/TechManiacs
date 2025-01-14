let activeimage = 0;
const slide = document.querySelectorAll(".slide-for-slideshow");
const totalSlidesForSlideShow = slide.length;
let showimages = changeSlideWidth();

function changeSlideWidth() {
  return window.innerWidth <= 800 ? 1 : 3;
}

function showslides(index) {
  if (index < 0) {
    activeimage = totalSlidesForSlideShow - showimages;
  } else if (index >= totalSlidesForSlideShow - showimages + 1) {
    activeimage = 0;
  } else {
    activeimage = index;
  }

  const transformvalue = -activeimage * (100 / showimages) + "%";
  document.querySelector(".slider-for-slideshow").style.transform =
    "translateX(" + transformvalue + ")";
}

window.addEventListener("resize", function () {
  showimages = changeSlideWidth();
  showslides(activeimage);
});

startAutoSlide();

function startAutoSlide() {
  setInterval(() => {
    showslides(activeimage + 1);
  }, 6000);
}
