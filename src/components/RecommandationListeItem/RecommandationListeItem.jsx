import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import style from './style.module.css';

// Section "Item de Recommandation" qui prend 2 paramètres et qui affiche une image et le nom du film, cette fonction est appelé dans "RecommandationListe"
/**
 * filmsTV = filmsTV
 * onClick = onClickItem
 * 
 */
export function RecommandationListeItem({ filmsTV, onClick }) {
    return (
        <div className={style.container} onClick={() => onClick(filmsTV)}>
            <img
                className={style.image}
                src={SMALL_IMG_COVER_BASE_URL + filmsTV.backdrop_path} // Concaténation de deux bouts d'adresses URL (config.js + backdrop_patch) afin d'afficher l'image du film
                alt={filmsTV.name}
            />
            <div className={style.titre}>
                {filmsTV.name}
            </div>
        </div>
    );
}  