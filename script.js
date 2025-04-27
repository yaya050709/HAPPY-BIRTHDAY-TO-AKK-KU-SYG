
document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('bg-music').play();
});

let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);
}

showSlides();

document.getElementById('replayBtn').addEventListener('click', function() {
    location.reload();
});
