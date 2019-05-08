// Grab vars
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
// Auto play
const auto = true;
const intervalTime = 5000;
let slideInterval;

// Next Slide function
const nextSlide = () => {
  // check huidige slide
  const current = document.querySelector(".current");
  // current class van huidige afhalen
  current.classList.remove("current");
  // Als volgende slide bestaat, voeg class toe, anders ga naar begin
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

// Prev Slide function
const prevSlide = () => {
  // check huidige slide
  const current = document.querySelector(".current");
  // current class van huidige afhalen
  current.classList.remove("current");
  // Als volgende slide bestaat, voeg class toe, anders ga naar begin
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto play
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
