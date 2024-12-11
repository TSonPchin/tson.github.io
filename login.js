console.log("Loaded");

document.getElementById('signUpBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút

    const overlayContainer = document.querySelector('.overlay-container');
    const overlay = document.querySelector('.overlay');
  
    overlayContainer.classList.add('expand');
    overlay.classList.add('expand');
});
    // Trigger the animation
    overlayRight.classList.add('overlay-expand');
    overlayLeft.classList.add('hidden');

