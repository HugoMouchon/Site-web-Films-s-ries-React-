
// Déclaration d'une constante qui contient le début de l'URL de l'API
const BASE_URL = "https://api.themoviedb.org/3/";

// Déclaration d'une constante qui contient la clé nécessaire à authentifier l'accés à l'API 
const API_KEY_PARAM = "?api_key=be58efcbc7b040ae78bda852bef5b5ae";

// Déclatration d'une constante qui contient le début de l'URL de l'image (que l'on concatenera avec la seconde partie qui se trouve dans l'API (backdrop_path))
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original/";

// Déclaration d'une constante qui réduit la taille des images à 300 pour pouvoir être utilisé pour les CARDS de l'onglet recommandation
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300/";


export {BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL};