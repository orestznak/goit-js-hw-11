
import './css/style.css'
import Notiflix from "notiflix";
//import simpleLightbox from "simplelightbox";
import { createGallery } from "./js/createGallery";
import ImgApiService from "./js/imgApiService";
import LoadMoreBtn from './js/loadMoreBtn';



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');


const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    hidden: true,
});
const imgApiService = new ImgApiService();
let countImages = 0;

searchForm.addEventListener('submit', searchImg);
loadMoreBtn.refs.btn.addEventListener('click', onLoadMore);

function searchImg(evt) {
  evt.preventDefault();

  loadMoreBtn.show();
  loadMoreBtn.disabled();

  clearImgGallery();
  imgApiService.query = evt.currentTarget.elements.searchQuery.value.trim();
  
  
  
  imgApiService.resetPage();
    
  imgApiService.fetchImages()
      .then(data => {
        if (data.total === 0 || imgApiService.query === ''){
          notiflixFailure();
        } else {
          appendImg(data.hits);
        };
        loadMoreBtn.enable();
      }
        )
      .catch(() => notiflixFailure())
};

function onLoadMore(evt) {
  evt.preventDefault();

  loadMoreBtn.disabled();
  imgApiService.fetchImages()
      .then(data => {
        appendImg(data.hits);
        loadMoreBtn.enable();
        
        countImages += data.hits.length;

        if(countImages === data.total){
          return Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
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