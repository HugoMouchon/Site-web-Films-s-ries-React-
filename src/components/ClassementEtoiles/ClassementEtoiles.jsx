import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons';

export function ClassementEtoiles ({etoile}) {
    
    const listEtoile = [];

    // Constante qui stock le premier nombre entier de la note 
    const starFillCount = Math.floor(etoile);

    // Constante qui stock si oui ou non il y a une demi etoile
    const hasStarHalf = etoile - starFillCount >= 0.5;

    // Constante qui stock le nombre d'étoiles vide
    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0); 

   for (let i =  0; i < starFillCount; i++) {
    listEtoile.push(<StarFill key={"star-fill" + i} />);
   }

   if (hasStarHalf) {
    listEtoile.push(<StarHalf key={"star-half"} />);
   }
        
   for (let i = 0; i < emptyStarCount; i++) {
    listEtoile.push(<StarEmpty key={"star-empty" + 1} />);
   }

    return (
        <div>
            {listEtoile}
        </div>
    );
}