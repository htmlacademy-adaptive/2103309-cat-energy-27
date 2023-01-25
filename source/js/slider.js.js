const wrapperEl = document. querySelector(".slider");

const bottomEl = document. querySelector(".slider__image-before")
const topEl = document. querySelector(".slider__image-after");
const sliderEl = document.querySelector(".slider__image");

const mouse = {
  isMouseDown: false,
  positionx: 0
};

sliderEl.addEventListener("mousedown", function () {
  mouse. isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  mouse.isMouseDown = false;
});

document. addEventListener("mousemove", function (event) {
  event.preventDefault();
  const { clientX } = event;
  const wrapperElRect = wrapperEl.getBoundingClientRect();
  const { left, right, width } = wrapperElRect;

  function getXPosition () {
    if (left > clientx) {
      return left;
  }
    if (clientx > right) {
      return right;
  }
    return clientX;
  };

  if (mouse.isMouseDown) {
    mouse.positionx = getXPosition();
    sliderEl.style.left = `${mouse.position - left - 5}px`;
    topEl.style.width = `${right - mouse.position - 50}px`;
    bottomEl.style.width = `${mouse.position - left - 50}px`;
  }
});
