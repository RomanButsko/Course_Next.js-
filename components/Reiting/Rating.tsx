import { RatingProps } from './Rating.props';
import cn from 'classnames';
import style from './Rating.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export const Rating = ({isEdit = false, rating, className ,children, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])
    
    const constructRating = (currentRating: number) => {
        const updateArr = ratingArr.map((item: JSX.Element, i: number) => {
            console.log(i);
            return  ( 
                <span key={i}
                    className={cn(style.block, {
                        [style.fill]: i < currentRating,
                        [style.isedit]: isEdit
                })}   
                onMouseEnter={() => changeDisplay(i + 1)}           
                onMouseLeave={() => changeDisplay(i + 1)}           
                onClick={() => onClick(i + 1)}           
                >
                    <Image src={'/components/Reiting/star.svg'} alt='star.svg' width='50px' height='50px'  
                    tabIndex = {isEdit ? 0 : -1} />
                </span>
            );
        });
        setRatingArr(updateArr);
    };

    const changeDisplay = (i: number) => {
        if (!isEdit) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEdit || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArr.map((item, i) => (<span key={i}>{item}</span>))}
        </div>
    );
};