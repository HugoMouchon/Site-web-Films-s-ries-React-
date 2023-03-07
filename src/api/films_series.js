// Import d'axios à la place de fetch (pour n'avoir qu'une réponse JSON et pas deux avec fetch)
import axios, { Axios } from "axios";
// Imoortation des constantes BASE_URL et API_KEY_PARAM depuis le fichier config.js
import { BASE_URL, API_KEY_PARAM } from "../config"


export class filmsSeriesAPI {
    // Ce code permet d'obtenir une liste des émissions de télévision populaires à partir de l'API de TMDb.
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results;
    };

    // Ce code permet d'obtenir une liste de recommandations pour une émission de télévision spécifique à partir de l'API de TMDb.
    static async fetchRecommandations(filmsTVId) {
        const response = await axios.get(`${BASE_URL}tv/${filmsTVId}/recommendations${API_KEY_PARAM}`);
        return response.data.results;
    };

    // Ce code permet d'obtenir une liste de recommandations pour une émission de télévision spécifique à partir de l'API de TMDb.
    static async fetchByTitle(titre) {
        const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${titre}`);
        return response.data.results;
    };

    static async fetchVideo(filmsTVId) {
        const response = await axios.get(`${BASE_URL}tv/${filmsTVId}/videos${API_KEY_PARAM}`);
        return response.data.results;   
    };

    static async fetchKeywords(filmsTVId) {
        const response = await axios.get(`${BASE_URL}tv/${filmsTVId}/keywords${API_KEY_PARAM}`);
        return response.data.results;   
    };
    
}
// https://api.themoviedb.org/3/tv/{tv_id}/keywords?api_key=<<api_key>>

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US