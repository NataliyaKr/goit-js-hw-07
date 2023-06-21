import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>
    </li>`;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,
});

