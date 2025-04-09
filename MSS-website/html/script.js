// Filter Gallery Items
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        let category = button.getAttribute('data-category');
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Open Lightbox
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
