window.addEventListener("scroll", function() {
    const header = document.querySelector("left-side");
    header.classList.toggle('sticky', window.scrollY > 0);

});