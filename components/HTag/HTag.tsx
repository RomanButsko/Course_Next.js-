import { IHTag } from './HTag.props';
import style from './HTag.module.css';

export const Htag = ({tag, children}: IHTag): JSX.Element => {
    return <> 
        <div>
            {tag == 'h1' && <h1 className={style.h1}>{children}</h1>}
            {tag == 'h2' &&<h2 className={style.h2}>{children}</h2>}
            {tag == 'h3' && <h3 className={style.h3}>{children}</h3>}
        </div>
    </>;

};