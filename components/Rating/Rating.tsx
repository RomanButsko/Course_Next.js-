import { RatingProps } from './Rating.props';
import cn from 'classnames';
import style from './Rating.module.css';
import { useEffect, useState } from 'react';
import Star from './star.svg';


export const Rating = ({isEdit = false, rating, className ,children, ...props}: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])
    
    const constructRating = (currentRating: number) => {
        const updateArr = ratingArr.map((item: JSX.Element, i: number) => {
            console.log(i);
            return  ( 
                <Star key={''}
                    className={cn(style.block, {
                        [style.fill]: i < currentRating
                    })}                
                />
            );
        });
        setRatingArr(updateArr);
    };

    return (
        <div {...props}>
            {ratingArr.map((item, i) => (<span key={i}>{item}</span>))}
        </div>
    );
};