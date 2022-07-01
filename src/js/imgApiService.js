import axios from "axios";
import { createGallery } from "./createGallery";

export default class ImgApiService {
    constructor() {
        this.query = '';
        this.page = 1;
    }

    fetchImages() {
        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '28335848-011b3dc949dd802b31558b1f8';

        // return axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal
        // &safesearch=true`)
        //         .then(response => {
        //             this.incrementPage();

        //             return response.data;
        //         })
        
    }
    get query() {
        return this.query;
    }
    set query(newQuery) {
        this.query = newQuery;
    }
    resetPage() {
        this.page = 1;
    }
    incrementPage() {
        this.page +=1;
    }
}