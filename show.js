let slideIndex = 0
let timer = null
let paused = false

const slides = document.querySelectorAll('.slide')

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? 'block' : 'none'
  })
}

function startSlides() {
  if (timer) return
  timer = setInterval(() => {
    nextSlide()
  }, 3000)
}

function stopSlides() {
  clearInterval(timer)
  timer = null
}

// Next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length
  showSlide(slideIndex)
}

// Previous slide
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length
  showSlide(slideIndex)
}

// Pause/Play toggle
function togglePause() {
  const pauseButton = document.querySelector('.pause-btn')

  if (paused) {
    startSlides()
    pauseButton.textContent = '⏸' // Show pause icon
  } else {
    stopSlides()
    pauseButton.textContent = '▶' // Show play icon
  }

  paused = !paused
}

// INITIALIZE
showSlide(slideIndex)
startSlides()
