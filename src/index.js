import axios from "axios";
import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";

const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const BASE_URL = 'https://pixabay.com/api/';



searchForm.addEventListener('submit', searchImg);

function searchImg(evt) {
    evt.preventDefault();

    const imagesQuery = searchForm.elements.searchQuery.value;

    console.log(imagesQuery);


    //fetchImg()





}



{/* <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div> */}