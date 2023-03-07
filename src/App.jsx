import React, { useState } from 'react'
import { useEffect } from 'react';
import { filmsSeriesAPI } from './api/films_series';
import { DetailsFilms } from './components/DetailsFilms/DetailsFilms';
import { Logo } from './components/Logo/Logo';
import { BACKDROP_BASE_URL, YOUTUBE } from './config';
import './global.css';
import style from "./style.module.css";
import logo from './assets/images/logo.png';
import { RecommandationListe } from './components/RecommandationListe/RecommandationListe';
import { BarreDeRecherche } from './components/BarreDeRecherche/BarreDeRecherche';

// Notre application
export function App() {
    // Déclaration d'une constante utilisant "useState" de React avec pour valeur "filmPopulaire" et son state "setFilmPopulaire" pour le mettre à jours
    const [filmPopulaire, setFilmPopulaire] = useState(null);
    const [filmRecommandationListe, setFilmRecommandationListe] = useState([]);


    // Fonction Asynchrone qui récupère les films les plus populaires à partir de l'API tmdb et définit le film le plus populaire comme étant le film à afficher. 
    async function fetchPopulars() {
        // Try/catch pour retourner une erreur visuel avec un message si il y en a une
        try {
            const populars = await filmsSeriesAPI.fetchPopulars();
            if (populars.length > 0) {
                setFilmPopulaire(populars[0]);
            }
        } catch (error) {
            alert("Erreur durant la recherche des séries populaires")
        }
    }

    // Fonction Asynchrone qui récupère les recommandations de films ou de séries télévisées pour un ID donné, et stocke les 10 premières recommandations dans un état de composant React. 
    async function fetchRecommandations(filmsTVId) {
        try {
            const recommandations = await filmsSeriesAPI.fetchRecommandations(filmsTVId);
            if (recommandations.length > 0) {
                setFilmRecommandationListe(recommandations.slice(0, 10));
            }

        } catch (error) {
            alert("Erreur durant la recherche des séries recommandées")
        }
    }


    // Appel de la fonction Asynchrone "fetchPopulars()" grace à l'Utilisation du Hooks "UseEffect" permettant de le rendre qu'une seule fois (grâce au [] vide).
    useEffect(() => {
        fetchPopulars();
    }, [])

    // Utilisation du UseEffect qui permet de récupérer les recommandations de films ou de séries télévisées pour un film populaire donné (filmPopulaire) chaque fois que cette variable change. Cela permet d'actualiser les recommandations en temps réel en fonction du film populaire sélectionné.
    useEffect(() => {
        if (filmPopulaire) {
            fetchRecommandations(filmPopulaire.id);
        }
    }, [filmPopulaire])

    async function rechercheFilms(nomFilm) {
        try {
            const searchResponse = await filmsSeriesAPI.fetchByTitle(nomFilm)
            if (searchResponse.length > 0) {
                setFilmPopulaire(searchResponse[0]);
            }
        } catch (error) {
            alert("Erreur durant la recherche de la série ")
        }
    }

    return (
        // Container de toute la page
        <div className={style.container}
            //On affiche l'image du film et on applique un leger background gris par dessus seulement si "filmPopulars" existe sinon on applique un background de couleur noir (utilisation du ternaire)
            style={{ background: filmPopulaire ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${filmPopulaire.backdrop_path}") no-repeat center / cover` : "black", }}>

            <div className={style.header}>
                <div className="row"> {/* div pour alligner le contenu */}
                    <div className='col-4'> {/* utilisation de Bootstrap, il prendra 4 colonnes sur 12 */}
                        <Logo image={logo} titre="Watowatch" sousTitre="Trouve le film fais pour toi " />{/* Appel du composant Logo qui prend en paramètre une image, un titre et un sous-titre*/}
                    </div>
                    <div className='col-sm-12 col-md-4'> {/* Prend tout l'ecran sur mobile sinon 4 col sur 12 sur PC (responsive)*/}
                        <BarreDeRecherche
                            onSubmit={rechercheFilms} /> {/* Barre de recherche */}
                    </div>
                </div>
            </div>

            {/** Section "Details du film" 
             Vérifie si "filmPopulaire" existe, si oui, il appel le composant Details et prend en paramètre "filmPopulaire
             -> Cette div permet d'afficher :
             * 1/ le titre
             * 2/ la note
             * 3/ le synopsis
            */}
            <div className={style.details_films}>
                {
                    filmPopulaire &&
                    <DetailsFilms
                        detail={filmPopulaire}
                    />
                }
            </div>

            {/** Section "liste de Recommandations"
             *  Ce code affiche une liste de recommandations de films si cette liste existe et est non-nulle (contient au moins un élément).
            */}
            <div className={style.recommandation}>
                {
                    filmRecommandationListe && filmRecommandationListe.length > 0 &&
                    <RecommandationListe
                        onClickItem={setFilmPopulaire}
                        recommandationListe={filmRecommandationListe}
                    />
                }
            </div>
        </div>
    );
}

export default App