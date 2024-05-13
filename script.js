const slider = document.getElementById("slider");
const sliderThumb = document.getElementById("slider-thumb");
const sliderFilled = document.getElementById("slider-filled");
const sliderValue = document.getElementById("slider-value");

let isDragging = false;
let startX, thumbLeft;

sliderThumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  thumbLeft = parseInt(sliderThumb.style.left) || 0;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  e.preventDefault();
  const newX = e.pageX - slider.offsetLeft;
  const newThumbLeft = Math.min(
    Math.max(0, newX - startX + thumbLeft),
    slider.offsetWidth - sliderThumb.offsetWidth
  );

  sliderThumb.style.left = newThumbLeft + "px";
  sliderFilled.style.width = newThumbLeft + 5 + "px";
  sliderValue.textContent = Math.round(
    (newThumbLeft / (slider.offsetWidth - sliderThumb.offsetWidth)) * 100
  );
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
