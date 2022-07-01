import axios from "axios";
//import { createGallery } from "./createGallery";

export default class ImgApiService {
    constructor() {
        this.searchQueryImg = '';
        this.page = 1;
    }
  
    fetchImages() {
        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '28335848-011b3dc949dd802b31558b1f8';

        return axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQueryImg}&image_type=photo&orientation=horizontal
        &safesearch=true&per_page=200&page=${this.page}`)
                .then(res => {
                    this.incrementPage();

                    return res.data;
                });    
    }
    get query() {
        return this.searchQueryImg;
    }
    set query(newQuery) {
        this.searchQueryImg = newQuery;
    }

    resetPage() {
        this.page = 1;
    }
    
    incrementPage() {
        this.page +=1;
    }
}