
function animateImage() {
    console.log("Called");
    $('#image').css({right: '25%'});
    $('#image').animate({right: '-10%'}, 5000, 'linear', function () {
        animateImage();
    });
}

$(document).ready(function () {
    animateImage();
});

function Fermer() {
    window.close();
}