import style from './style.module.css';
import { Search } from 'react-bootstrap-icons';

export function BarreDeRecherche (props) {
    return (
        <>
            <Search className={style.icon} size={27}/>
            <input className={style.input} type="text" placeholder='Cherche un film que tu pourrais apprécier' />
        </>
    );
}