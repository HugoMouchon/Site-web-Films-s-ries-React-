import { ClassementEtoiles } from '../ClassementEtoiles/ClassementEtoiles';
import style from './style.module.css';

export function DetailsFilms({ detail }) {

    const etoile = detail.vote_average / 2;

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
