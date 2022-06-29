
import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import { fetchImages } from "./fetchImages";



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


searchForm.addEventListener('submit', searchImg);

function searchImg(evt) {
    evt.preventDefault();

    const query = searchForm.elements.searchQuery.value;

    fetchImages(query).then(resp => {
                            imgGallery.innerHTML = createGallery(resp.hits)})
                      .catch(() => Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again'));
    


};

// const createGallery = (data) => {
//   return data.map(image => 
//       `<div class="photo-card">
//       <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
//       <div class="info">
//         <p class="info-item">
//           <b>Likes:${image.likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views:${image.views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments: ${image.comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads:${image.downloads}</b>
//         </p>
//       </div>
//     </div> `
//   ).join('');

// }


