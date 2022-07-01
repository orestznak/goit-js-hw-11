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
        &safesearch=true`)
                .then(res => {
                    this.incrementPage();

                    return res.data;
                });    
    }
    //  fetchImage() {
    //     return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQueryImg}&image_type=photo&orientation=horizontal&safesearch=true`)
    //         .then (r => r.json)
    //         .then(data => {
    //             this.incrementPage();

    //             return data.hits;
    //         })
    // }

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