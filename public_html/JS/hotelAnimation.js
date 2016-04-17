function animateImage() {
    Right();
}
function Right() {
    $("#image").animate({left: "+=250"}, 2500, "swing", Left);
}
function Left() {
    $("#image").animate({left: "-=500"}, 5000, "swing", Revenir);
}
function Revenir() {
    $("#image").animate({left: "+=250"}, 2500, "swing", stop());
}

$(document).ready(function () {
    animateImage();
});

function Fermer() {
    window.close();
}