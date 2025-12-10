// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href');
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
});

// Gallery & lightbox
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".main-slider");
    const thumbs = document.querySelectorAll(".thumb");
    const lightbox = document.querySelector(".lightbox");
    const lbImg = document.querySelector(".lightbox-img");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    let index = 0;

    function show(i) {
        // gambar utama berubah
        document.querySelector(".main-image").src = thumbs[i].src;

        // highlight thumbnail
        thumbs.forEach(t => t.classList.remove("active"));
        thumbs[i].classList.add("active");

        index = i;
    }

    // klik thumbnail
    thumbs.forEach((t, i) => {
        t.addEventListener("click", () => show(i));
    });

    // buka lightbox
    gallery.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lbImg.src = thumbs[index].src;
    });

    // tombol kanan
    btnNext.addEventListener("click", () => {
        index = (index + 1) % thumbs.length;
        lbImg.src = thumbs[index].src;
        show(index);
    });

    // tombol kiri
    btnPrev.addEventListener("click", () => {
        index = (index - 1 + thumbs.length) % thumbs.length;
        lbImg.src = thumbs[index].src;
        show(index);
    });

    // klik luar untuk tutup
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});