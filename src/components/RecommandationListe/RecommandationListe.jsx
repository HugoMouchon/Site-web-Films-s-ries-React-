// import style from './style.module.css';
import { RecommandationListeItem } from '../RecommandationListeItem/RecommandationListeItem';

export function RecommandationListe({ tvShowlist }) {
    return (
        <>
            <div>Vous pourriez aimer aussi:</div>
            <div>
                {tvShowlist.map((tvShow) => {
                    return (
                        <RecommandationListeItem tvShow={tvShow} onClick={() => ""} />
                    );
                })}
            </div>
        </>
    );
}