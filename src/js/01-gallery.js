import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </li>`;
    })
    .join("");
}
const onContainerClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
    instance.show();
};

galleryEl.addEventListener("click", onContainerClick);

