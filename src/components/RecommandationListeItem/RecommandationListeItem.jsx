import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import style from './style.module.css';

export function RecommandationListeItem({ filmsTV, onClick }) {
    return (
        <div className={style.container} onClick={() => onClick(filmsTV)}>
            <img
                className={style.image}
                src={SMALL_IMG_COVER_BASE_URL + filmsTV.backdrop_path}
                alt={filmsTV.name}
            />
            <div className={style.titre}>
                {filmsTV.name}
            </div>
        </div>
    );
}  