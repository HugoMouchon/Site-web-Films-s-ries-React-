import style from './style.module.css';

export function Logo({ image, titre, sousTitre }) {
    return (
        <>
            <div className={style.container}>
                <img className={style.image} src={image} alt="" />
                <span className={style.titre}>{titre}</span>
            </div>
            <span className={style.soustitre}>{sousTitre}</span>
        </>
    );
}