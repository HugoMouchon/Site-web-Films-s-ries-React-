// Import d'axios à la place de fetch (pour n'avoir qu'une réponse JSON et pas deux avec fetch)
import axios from "axios";
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
}