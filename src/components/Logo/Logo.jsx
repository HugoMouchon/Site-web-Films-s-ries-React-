import style from './style.module.css';

// Fonction pour afficher le Logo qui prend en paramètre une image, un titre et un sous-titre
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