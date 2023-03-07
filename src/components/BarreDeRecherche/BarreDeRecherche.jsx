import style from './style.module.css';
import { Search } from 'react-bootstrap-icons';

export function BarreDeRecherche({ onSubmit }) {

    function submit(event) {
        if(event.key === "Enter" && event.target.value.trim() !== "")
        console.log(event.target.value);
        onSubmit(event.target.value);
    } 

    return (
        <>
            <Search className={style.icon} size={27} />
            <input
                onKeyUp={submit}
                className={style.input}
                type="text"
                placeholder='Cherche un film que tu pourrais apprécier'
            />
        </>
    );
}