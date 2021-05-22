window.onscroll = function () { detectarScroll() };

function detectarScroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        document.getElementById("divBkUpbtt").style.display = "block";
    else 
        document.getElementById("divBkUpbtt").style.display = "none";
}

function backUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
}