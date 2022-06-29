// import axios from "axios";
import Notiflix from "notiflix";
import simpleLightbox from "simplelightbox";
import { fetchImages } from "./fetchImages";

const searchForm = document.querySelector('#search-form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

// const BASE_URL = 'https://pixabay.com/api/';
// const MY_KEY = '28335848-011b3dc949dd802b31558b1f8';




searchForm.addEventListener('submit', searchImg);

function searchImg(evt) {
    evt.preventDefault();

    const imagesQuery = searchForm.elements.searchQuery.value;

    fetchImages(imagesQuery)
    console.log();

    // ${BaseAudioContext}?key=${MY_KEY}&q=${imagesQuery}


//     axios.get(`${BASE_URL}?key=${MY_KEY}&q=${imagesQuery}&image_type=photo`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })


    //fetchImges()





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