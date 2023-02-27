import { ClassementEtoiles } from '../ClassementEtoiles/ClassementEtoiles';
import style from './style.module.css';

/**
 * Fonction qui permet d'afficher les détails du film:
 * 1/ Titre
 * 2/ La note
 * 3/ Le synopsis
 */

export function DetailsFilms({ detail }) {

    // On divise la notre initial sur 10 par 2 et on réduit à 1 le nombre de chiffre après la virgule
    const etoile = (detail.vote_average / 2).toFixed(1);

    return (
        <div>
            <div className={style.titre}>{detail.name}</div>
            <div className={style.etoile_container}>
                <ClassementEtoiles etoile={etoile}    /> 
                <div className={style.etoile}>{etoile}</div>
            </div>
            <div className={style.synopsis}>{detail.overview}</div>
        </div>
    );
}
