import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const newGalleryItems = [];

//galleryItems.forEach(galleryElement => {    
//
//    const galleryItem = document.createElement('li');
//        galleryItem.className = 'gallery__item';
//
//	const galleryLink = document.createElement('a');
//	    galleryLink.className = 'gallery__link';    
//	    galleryLink.href = galleryElement.original;
//
//	const galleryImage = document.createElement('img');
//	    galleryImage.className = 'gallery__image';
//	    galleryImage.src = galleryElement.preview;
//	    galleryImage.setAttribute('title', galleryElement.description);
//	    galleryImage.alt = galleryElement.description;
//
//    galleryItem.append(galleryLink);
//    galleryLink.append(galleryImage);
//	newGalleryItems.push(galleryItem);
//});
//
//gallery.append(...newGalleryItems);

const galleryMarkup = generateGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function generateGalleryMarkup(galleryItems) {
  return galleryItems.map((galleryItem) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image" 
             src="${galleryItem.preview}"
             data-source="${galleryItem.original}"
             alt="${galleryItem.description}" />
      </a>
    </div>
  `).join('');
};

new SimpleLightbox('.gallery a', {
	captionDelay: 250
});