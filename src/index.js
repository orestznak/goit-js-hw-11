
import Notiflix from "notiflix";
//import simpleLightbox from "simplelightbox";
import { fetchImages } from "./js/fetchImages";
import { createGallery } from "./createGallery";



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


searchForm.addEventListener('submit', searchImg);

function searchImg(evt) {
    evt.preventDefault();

    const query = searchForm.elements.searchQuery.value;

    fetchImages(query)
    .then(data => {
      imgGallery.innerHTML = createGallery(data.hits)
    })
    .catch(() => Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again'));
};

loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore(evt) {
  evt.preventDefault();

}

