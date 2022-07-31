import React, { useState } from 'react';
import {Htag, Button, PComponent, Tag, Rating} from '../components/index';
import { withLayout } from '../layout/Layout/Layout';


function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);
  
  return <>
    <Htag tag='h1'>First Text</Htag>
    <Htag tag='h2'>Second Text</Htag>
    <Htag tag='h3'>Therd Text</Htag>
    <Button type='primary' className="mybutton" >Главная кнопка</Button>
    <Button type='other'>Вторая кнопка</Button>
    <PComponent text='16'>Hello</PComponent>
    <Tag fz='12'>Photoshop</Tag>
    <Tag fz='12Up'>Дизайн сайтов</Tag>
    <Tag fz='14'>hh.ru</Tag>
    <Tag fz='14Up'>10</Tag>
    <Rating rating={rating} isEdit setRating={setRating}/>
    </>;
}

export default withLayout(Home);