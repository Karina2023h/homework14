let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const prevBut = document.querySelector(".prev");
const nextBut = document.querySelector(".next");
const blockContainer = document.querySelector(".block");

function updateSlides() {
  // console.log(currentSlide);
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
  prevBut.style.visibility = currentSlide === 0 ? "hidden" : "visible";
  nextBut.style.visibility =
    currentSlide === slides.length - 1 ? "hidden" : "visible";

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active-dot", index === currentSlide);
  });
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
}

slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlides();
  });
  blockContainer.appendChild(dot);
});

updateSlides();
