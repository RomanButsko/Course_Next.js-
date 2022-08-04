import { withLayout } from '../../layout/Layout/Layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { RootObject } from '../../interfaces/menu.interfaces';
import { LevelCategory, PageModal } from '../../interfaces/page.interfaces';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interfaces';
import { firstMenu } from '../../helper/helpers';
import { TopPage } from '../../page-component/Top-pageComponent/TopPageComponent';
import {TopPageComponentProps } from '../../page-component/Top-pageComponent/TopPageComponent.props';


function TopPageA({page, products ,firstCategory }: TopPageComponentProps): JSX.Element {

  return <TopPage
      firstCategory={firstCategory}
      page={page}
      products={products}
      />
}

export default withLayout(TopPageA);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const s of firstMenu) { 
    const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
        firstCategory: s.id
      });
      paths = paths.concat( menu.flatMap(m => m.pages.map(p => s.route + p.alias)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
  try {
  const {data: menu } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find', {
    firstCategory: firstCategoryItem?.id 
  });
  if (menu.length === 0) {
    return {
      notFound: true
  };
  }
  const {data: page } = await axios.get<PageModal>(process.env.NEXT_PUBLIC_Category + '/api/top-page/find' + params );   
  const {data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_Category + '/api/product/find' + params , {
    category: page.category,
    limit: 10
  });   
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem?.id,
      page,
      products
    }
  };
}
 catch {
    return {
    notFound: true
};
}
};
interface ProductProps extends Record<string, unknown> {
  menu: RootObject[]
  firstCategory: LevelCategory
  page: PageModal
  products: ProductModel[]
}