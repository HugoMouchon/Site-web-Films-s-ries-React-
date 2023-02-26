// Import d'axios à la place de fetch (pour n'avoir qu'une réponse JSON et pas deux avec fetch)
import axios from "axios";
// Imoortation des constantes BASE_URL et API_KEY_PARAM depuis le fichier config.js
import {BASE_URL, API_KEY_PARAM} from "../config"

// Déclaration d'une classe "filmSeriesAPI" qui contient la fonction "fetchPopulars" qui récupère la liste des films populaire et qui le concatène avec les constantes {BASE_URL} et {API_KEY_PARAM} de façon Asynchrone pour rendre le tout dynamique.
export class filmsSeriesAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        return response.data.results;
    };

    static async fetchRecommandations(filmsTVId){
        const response = await axios.get(`${BASE_URL}tv/${filmsTVId}/recommendations${API_KEY_PARAM}`);
        return response.data.results;
    };
}








// https://api.themoviedb.org/3/tv/{tv_id}/recommendations