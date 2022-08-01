import { withLayout } from '../../layout/Layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { RootObject } from '../../interfaces/menu.interfaces';
import { PageModal } from '../../interfaces/page.interfaces';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interfaces';

const firstCategory = 0;

function Home({menu, page, products}: ProductProps): JSX.Element {

  return <>
    </>;
}

export default withLayout(Home);

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
        firstCategory 
      });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
  const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
    firstCategory 
  });
  const {data: page } = await axios.get<PageModal>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find' + params );   
  const {data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_Category + '/api/product/find' + params , {
    category: page.category,
    limit: 10
  });   
  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};

interface ProductProps extends Record<string, unknown> {
  menu: RootObject[]
  firstCategory: number
  page: PageModal
  products: ProductModel[]
}
