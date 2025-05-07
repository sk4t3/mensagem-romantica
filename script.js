document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".itemimg");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "flex";
        modalImg.src = images[currentIndex].src;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        modalImg.src = images[currentIndex].src;
    }

    // Adiciona eventos às imagens
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    // Adiciona eventos aos botões do modal
    closeBtn.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));
});
