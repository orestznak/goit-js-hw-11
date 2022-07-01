
import Notiflix from "notiflix";
//import simpleLightbox from "simplelightbox";
//import { fetchImages } from "./js/fetchImages";
import { createGallery } from "./js/createGallery";
import ImgApiService from "./js/imgApiService";



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const imgApiService = new ImgApiService();

searchForm.addEventListener('submit', searchImg);
//loadMoreBtn.addEventListener('click', onLoadMore);

function searchImg(evt) {
    evt.preventDefault();

    clearImgGallery();
    imgApiService.query = searchForm.elements.searchQuery.value.trim();

    imgApiService.resetPage();
    
    imgApiService.fetchImages()
          .then(data => appendImg(data.hits))
          .catch(() => Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again'));
};

function onLoadMore(evt) {
  evt.preventDefault();
  imgApiService.fetchImages();
}

function appendImg (data) {
  imgGallery.insertAdjacentHTML('beforeend',createGallery(data));
}

function clearImgGallery() {
  imgGallery.innerHTML= '';
}