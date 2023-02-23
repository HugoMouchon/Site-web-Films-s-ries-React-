import React from 'react'
import { filmsSeriesAPI } from './api/films_series';
import './global.css';
import style from "./style.module.css";

filmsSeriesAPI.fetchPopulars();

export function App() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className="row">
                    <div className='col-4'>
                        <div>Logo</div>
                        <div>Sous-titre</div>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <input style={{width: "100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={style.details_films}>Détails</div>
            <div className={style.recommandation}>Recommandation</div>
        </div>
    );
}

export default App