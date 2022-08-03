import React from 'react';
import { withLayout } from '../../layout/Layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { RootObject } from '../../interfaces/menu.interfaces';
import { firstMenu } from '../../helper/helpers';
import { ParsedUrlQuery } from 'querystring';

function Type({menu}: TypeProps): JSX.Element {
   return <>
        First: {menu}
    </>;
}

export default withLayout(Type);


export const getStaticPaths: GetStaticPaths = async () => { 
    return {
        paths: firstMenu.map(m => '/' + m.route),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
      return {
          notFound: true
      };
  }
  const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: RootObject[]
  firstCategory: number
}



