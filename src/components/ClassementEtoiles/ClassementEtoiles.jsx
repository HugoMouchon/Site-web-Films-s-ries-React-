import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons';

// Fonction permettant d'afficher la note en forme d'étoiles (bootstrap-icons) et qui est appelé dans la fonction "DetailsFilms"
export function ClassementEtoiles ({etoile}) {
    
    // Déclaration d'un tableau "listeEtoile"
    const listEtoile = [];

    // Constante qui stock le premier nombre entier de la note 
    const starFillCount = Math.floor(etoile);

    // Constante qui stock si oui ou non il y a une demi etoile
    const hasStarHalf = etoile - starFillCount >= 0.5;

    // Constante qui stock le nombre d'étoiles vide
    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0); 

    // Boucle qui crée autant de composants "Etoiles Pleines" que le premier entier de la note et qui les stockent dans le tableau "listEtoile" avec une clé unique.
   for (let i =  0; i < starFillCount; i++) {
    listEtoile.push(<StarFill key={"star-fill" + i} />);
   }

   // Condition qui s'applique si "hasStarHalf" existe, et qui stock le composant étoile semi-pleine dans le tableau "listeEtoile"
   if (hasStarHalf) {
    listEtoile.push(<StarHalf key={"star-half"} />);
   }
    
    // Boucle qui crée autant de composants "Etoiles vide" et qui les stockent dans le tableau "listEtoile" avec une clé unique.
   for (let i = 0; i < emptyStarCount; i++) {
    listEtoile.push(<StarEmpty key={"star-empty" + 1} />);
   }

    return (
        <div>
            {listEtoile}
        </div>
    );
}