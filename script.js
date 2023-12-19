const img = document.querySelector("#img-lisa");

graus = -15;
img.style.transform = 'rotate(' + graus + 'deg)'; 

setInterval(function() {
    if (graus === -15) {
        graus = 15;
    } else {
        graus = -15;
    }
    img.style.transform = 'rotate(' + graus + 'deg)';    
}, 2000);