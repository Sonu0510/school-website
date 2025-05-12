

const images = [
    '../images/1.jpg',
    '../images/6.jpg',
    '../images/3.jpg',
    '../images/4.jpg',
    '../images/5.jpg',
    '../images/7.jpg'
];

let currentIndex = 0;

function changeBackground() {
    const bgDiv = document.getElementById('background-image');
    if (bgDiv) {
        bgDiv.style.backgroundImage = `url('${images[currentIndex]}')`;
        bgDiv.style.backgroundSize = 'cover';
        bgDiv.style.backgroundPosition = 'center';
    }

    currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

// Change background image every 5 seconds (adjust timing as needed)
setInterval(changeBackground, 5000); // 5000 milliseconds = 5 seconds

changeBackground();
