const modal = document.querySelector(".modal");
const preview = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector("caption");


preview.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //mengambil data original untuk dibuat dinamis
        const originalSrc = preview.getAttribute("data-original");
        original.scr = `${originalSrc}`;
        console.log(originalSrc)
        const caption = preview.alt;
        caption.textContent = caption;

    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});
