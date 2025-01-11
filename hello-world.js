const dragElement = document.getElementById('drag-it');

let isDragging = false;
let offsetX, offsetY;

dragElement.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - dragElement.offsetLeft;
  offsetY = e.clientY - dragElement.offsetTop;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    dragElement.style.left = (e.clientX - offsetX) + 'px'; 
    dragElement.style.top = (e.clientY - offsetY) + 'px'; 
  }
});