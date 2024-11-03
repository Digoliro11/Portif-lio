let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    document.body.classList.toggle('claro');
});

window.onscroll = function() {
    const topoBtn = document.getElementById("topoBtn");
    if (window.scrollY > 300) { 
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }
};

document.getElementById("topoBtn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});