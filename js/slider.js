document.querySelector(".left").addEventListener("click", prevSlide);
document.querySelector(".right").addEventListener("click", nextSlide);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const transformValue = -currentSlide * 100 + "%";
  document.querySelector(".slider").style.transform =
    "translateX(" + transformValue + ")";

  updateBullets();
  triggerAnimations(currentSlide);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function createBullet(index) {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.addEventListener("click", function () {
    showSlide(index);
  });
  return bullet;
}

function updateBullets() {
  const bulletContainer = document.getElementById("bulletContainer");
  bulletContainer.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const bullet = createBullet(i);
    if (i === currentSlide) {
      bullet.classList.add("active");
    }
    bulletContainer.appendChild(bullet);
  }
}

setInterval(nextSlide, 20000);

updateBullets();

function triggerAnimations(slideIndex) {
  const currentSlide = slides[slideIndex];
  const animatableElements = currentSlide.querySelectorAll(
    ".iphone-image, .save-pop-up, .offer-title, .offer-subtitle, .offer-button, .psVr-image, .tv-image, .offer-title-3, .offer-subtitle-3" 
  );

  animatableElements.forEach((element) => {
    element.classList.remove("animate");
    void element.offsetWidth;

    setTimeout(() => {
      element.classList.add("animate");
    }, 10);
  });
}
