import { RecommandationListeItem } from '../RecommandationListeItem/RecommandationListeItem';
import style from './style.module.css';

export function RecommandationListe({ recommandationListe, onClickItem }) {
    return (
        <>
            <div className={style.titre}>Vous pourriez aussi aimer:</div>
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