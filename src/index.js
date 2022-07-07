
import './css/style.css'

import Notiflix from "notiflix";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

import { createGallery } from "./js/createGallery";
import ImgApiService from "./js/imgApiService";
import LoadMoreBtn from './js/loadMoreBtn';



const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const scrollGuard = document.querySelector('.scroll-guard');


const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    hidden: true,
});

const imgApiService = new ImgApiService();
let countImages = 0;

const scrollOptions = {
  rootNargin: '50px',
  threshold: 1.0
}
const observer = new IntersectionObserver( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      imgApiService.fetchImages()
      .then(data => {
        appendImg(data.hits);
        // loadMoreBtn.enable();
        countImages += data.hits.length;
        console.log(countImages);
        // lightbox.refresh();
        
        if(countImages > data.totalHits){
          // loadMoreBtn.hide();
          Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
          
        }
      })

    }
  })
},scrollOptions);




searchForm.addEventListener('submit', searchImg);
// loadMoreBtn.refs.btn.addEventListener('click', onLoadMore);
// imgGallery.addEventListener('click', showModal);

observer.observe(scrollGuard);


function searchImg(evt) {
  evt.preventDefault();

  clearImgGallery();
  imgApiService.query = evt.currentTarget.elements.searchQuery.value.trim();
    
  imgApiService.resetPage();
    
  imgApiService.fetchImages()
      .then(data => {

        if (data.total === 0 || imgApiService.query === ''){
          notiflixFailure();
          loadMoreBtn.hide();

        } else {
          loadMoreBtn.show();
          loadMoreBtn.disabled();

          appendImg(data.hits);
          new SimpleLightbox('.gallery a').refresh();
          //simpleLightbox =  , {captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250}

          const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

          window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
          });

          countImages = data.hits.length;
          
          loadMoreBtn.enable();
          Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        };
        
      }
        )
      .catch(() => notiflixFailure())
};

// function onLoadMore(evt) {
//   evt.preventDefault();

//   loadMoreBtn.disabled();

//   imgApiService.fetchImages()
//       .then(data => {
//         appendImg(data.hits);
//         loadMoreBtn.enable();
//         countImages += data.hits.length;
//         console.log(countImages);
//         // lightbox.refresh();
        
//         if(countImages > data.totalHits){
//           loadMoreBtn.hide();
//           Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
          
//         }
//       })
// }

function appendImg (data) {
  imgGallery.insertAdjacentHTML('beforeend',createGallery(data));
}

function clearImgGallery() {
  imgGallery.innerHTML= '';
}

function notiflixFailure() {
  return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again');
}

// function showModal(event) {
//   if (event.target.nodeName !== 'IMG') {
//       return;
//   }

//   event.preventDefault();
// }