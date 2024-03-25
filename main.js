// get screen aspect ratio
document.addEventListener("DOMContentLoaded", function() {
    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var aspectRatio = windowWidth / windowHeight;

    if (aspectRatio > 1.5) {
        document.body.style.width = "30%";
        console.log("pc / 16:9 layout")
    } else if (aspectRatio >= 0.8 && aspectRatio <= 1.5) {
        document.body.style.width = "50%";
        console.log("tablet / 4:3 layout")
    } else {
        document.body.style.width = "85%";
        var contentBoxes = document.querySelectorAll('.contentbox');
        contentBoxes.forEach(function(box) {
            box.style.marginTop = "4%";
        });
        console.log("mobile layout")
    }
});