import { RecommandationListeItem } from '../RecommandationListeItem/RecommandationListeItem';
import style from './style.module.css';

// Section "Liste de Recommandation" qui prend 2 paramètres et qui affiche un titre, une liste de films avec des composants "RecommandationListeItem" à l'intérieur
/**
 * recommandationListe = filmRecommandationListe
 * onClickItem = setFilmRecommandationListe
 * 
 */
export function RecommandationListe({ recommandationListe, onClickItem }) {
    return (
        <>
            <div className={style.titre}>Vous pourriez aussi aimer :</div>
            <div className={style.liste}>
                {recommandationListe.map((filmsTV) => {
                    return (
                        <span key={filmsTV.id} className={style.liste_item}>
                            <RecommandationListeItem onClick={onClickItem} filmsTV={filmsTV} />
                        </span>
                    );
                })}
            </div>
        </>
    );
}