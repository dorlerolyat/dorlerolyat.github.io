document.addEventListener('mousemove', function (e) {
    const img = document.querySelector('.floating-image');
    const moveAmount = 80; // Adjust this value to control the movement intensity

    const x = (window.innerWidth / 2 - e.pageX) / moveAmount;
    let y = (window.innerHeight / 2 - e.pageY) / moveAmount;

    // Prevent the image from moving downwards
    if (y > 0) {
        y = 0;
    }

    img.style.transform = `translateX(-50%) translate(${x}px, ${y}px)`;
});
