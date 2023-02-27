import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const newGalleryItems = [];

galleryItems.forEach(galleryElement => {    

    const galleryItem = document.createElement('li');
        galleryItem.className = 'gallery__item';

	const galleryLink = document.createElement('a');
	    galleryLink.className = 'gallery__link';    
	    galleryLink.href = galleryElement.original;

	const galleryImage = document.createElement('img');
	    galleryImage.className = 'gallery__image';
	    galleryImage.src = galleryElement.preview;
	    galleryImage.setAttribute('title', galleryElement.description);
	    galleryImage.alt = galleryElement.description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
	newGalleryItems.push(galleryItem);
});

gallery.append(...newGalleryItems);

new SimpleLightbox('.gallery a', {
	captionDelay: 250
});