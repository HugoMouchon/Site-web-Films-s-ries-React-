import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=be58efcbc7b040ae78bda852bef5b5ae";


export class filmsSeriesAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log("***", response.data.results);
        return response.data.results;
    }    
}