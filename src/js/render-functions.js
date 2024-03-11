import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


 const gallery = document.querySelector(".gallery")

export function renderImages(arr) {
  const markup = renderMarkup(arr);
    gallery.innerHTML = markup;
    lightbox.refresh();
}


function renderMarkup(arr) {
    return arr.map(createImageCard).join("\n");
}
 function createImageCard(img) {
   
    return `<li class="gallery-item">
                <a class="gallery-link" href="${img.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${img.webformatURL}"
                        alt="${img.tags}"
                        width="${img.previewWidth}"
                        height="${img.previewHeight}"
                    />
                </a>
                <ul class="description">
                        <li class="desc-item">
                            <h3 class="des-head">Likes</h3>
                            <p>${img.likes}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Views</h3>
                            <p>${img.views}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Comments</h3>
                            <p>${img.comments}</p>
                        </li>
                        <li class="desc-item">
                            <h3 class="des-head">Downloads</h3>
                            <p>${img.downloads}</p>
                        </li>
                    </ul>
            </li>`;
}

export function clearMarkup() {
    gallery.innerHTML = "";

}