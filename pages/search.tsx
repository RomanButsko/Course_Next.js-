import React from 'react';
import { withLayout } from '../layout/Layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { RootObject } from '../interfaces/menu.interfaces';

function Search({menu}: HomeProps): JSX.Element {
  
  return <>

    </>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
    firstCategory 
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: RootObject[]
  firstCategory: number
}