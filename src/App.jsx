import React, { useState } from 'react'
import { useEffect } from 'react';
import { filmsSeriesAPI } from './api/films_series';
import { BACKDROP_BASE_URL } from './config';
import './global.css';
import style from "./style.module.css";

// Appel de la fonction "fetchpopulars" de la classe filmsSeriesAPI
filmsSeriesAPI.fetchPopulars();

// Notre application
export function App() {
    // Déclaration d'une constante utilisant "useState" de React avec pour valeur "filmPopulaire" et son state "setFilmPopulaire" pour le mettre à jours
    const [filmPopulaire, setFilmPopulaire] = useState();

    // Fonction Asynchrone qui récupère les films les plus populaires à partir de l'API tmdb et définit le film le plus populaire comme étant le film à afficher. 
    async function fetchPopulars() {
        const populars = await filmsSeriesAPI.fetchPopulars();
        if (populars.length > 0) {
            setFilmPopulaire(populars[0]);
        }
    }
    // Appel de la fonction Asynchrone "fetchPopulars()" grace à l'Utilisation du Hooks "UseEffect" permettant de le rendre qu'une seule fois (grâce au [] vide).
    useEffect(() => {
        fetchPopulars();
    }, [])

    console.log(filmPopulaire);
    return (
        // Container de toute la page
        <div className={style.container}
            //On affiche l'image du film et on applique un leger background gris par dessus seulement si "filmPopulars" existe sinon on applique un background de couleur noir (utilisation du ternaire)
            style={{ background: filmPopulaire ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${filmPopulaire.backdrop_path}") no-repeat center / cover` : "black", }}>
            <div className={style.header}>
                <div className="row"> {/* div pour alligner le contenu */}
                    <div className='col-4'> {/* utilisation de Bootstrap, il prendra 4 colonnes sur 12 */}
                        <div>Logo</div>
                        <div>Sous-titre</div>
                    </div>
                    <div className='col-sm-12 col-md-4'> {/* Prend tout l'ecran sur mobile sinon 4 col sur 12 sur PC (responsive)*/}
                        <input style={{ width: "100%" }} type="text" /> {/* Barre de recherche */}
                    </div>
                </div>
            </div>
            <div className={style.details_films}>Détails</div>
            <div className={style.recommandation}>Recommandation</div>
        </div>
    );
}

export default App