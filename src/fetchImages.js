import axios from "axios";


const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '28335848-011b3dc949dd802b31558b1f8';

export const fetchImages = (imagesQuery) => {
    return axios.get(`${BASE_URL}?key=${MY_KEY}&q=${imagesQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
                .then(response => {return response.data})
}