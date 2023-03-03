import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const newGalleryItems = [];

//galleryItems.forEach(galleryElement => {
//
//    const galleryItem = document.createElement('div');
//        galleryItem.className = 'gallery__item';
//
//    const galleryLink = document.createElement('a');
//        galleryLink.className = 'gallery__link';
//        galleryLink.href = galleryElement.original;
//
//    const galleryImage = document.createElement('img');
//        galleryImage.className = 'gallery__image';
//        galleryImage.src = galleryElement.preview;
//        galleryImage.setAttribute('data-source', galleryElement.original);
//        galleryImage.alt = galleryElement.description;
//
//    galleryItem.append(galleryLink);
//    galleryLink.append(galleryImage);
//    newGalleryItems.push(galleryItem);
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


gallery.addEventListener('click', clickSelectedImage);

gallery.addEventListener('keydown', closeGalleryEscape, { once: true });


function clickSelectedImage (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return;
	}

    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute('data-source')}" width="800" height="600">
    `)
    
    instance.show();
};


function closeGalleryEscape (event) {
    if (event.key === 'Escape') {
        instance.close()
    }
}; 


//    gallery.addEventListener('click', clickSelectedImage);
//
//function clickSelectedImage (event) {
//    event.preventDefault();
//    if (event.target.nodeName !== 'IMG') {
//		return;
//	};
//
//    const instance = basicLightbox.create(`
//    <img src="${event.target.getAttribute('data-source')}" width="800" height="600">
//   `)
//
//    instance.show();
//
//    gallery.addEventListener('keydown', closeGalleryEscape, { once: true });
//
//    function closeGalleryEscape (event) {
//        if (event.key === 'Escape') {
//            instance.close()
//        }
//    };  
//};