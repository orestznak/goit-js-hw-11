
import './css/style.css'
import Notiflix from "notiflix";
//import simpleLightbox from "simplelightbox";
//import { fetchImages } from "./js/fetchImages";
import { createGallery } from "./js/createGallery";
import ImgApiService from "./js/imgApiService";



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.setAttribute.disabled = true;

const imgApiService = new ImgApiService();

searchForm.addEventListener('submit', searchImg);
loadMoreBtn.addEventListener('click', onLoadMore);

function searchImg(evt) {
  evt.preventDefault();

  clearImgGallery();
  imgApiService.query = evt.currentTarget.elements.searchQuery.value.trim();
  
  
  
  imgApiService.resetPage();
    
  imgApiService.fetchImages()
      .then(data => {
        if (data.total === 0 || imgApiService.query === ''){
          notiflixFailure();
        } else {
          appendImg(data.hits);
        }
      }
        )
      .catch(() => notiflixFailure())
};

function onLoadMore(evt) {
  evt.preventDefault();

  imgApiService.fetchImages()
      .then(data => {
        appendImg(data.hits);
        if(true){

        }
      })
}

function appendImg (data) {
  imgGallery.insertAdjacentHTML('beforeend',createGallery(data));
}

function clearImgGallery() {
  imgGallery.innerHTML= '';
}

function notiflixFailure() {
  return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
}