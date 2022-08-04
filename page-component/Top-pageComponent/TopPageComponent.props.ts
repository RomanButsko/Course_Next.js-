import { LevelCategory, PageModal } from '../../interfaces/page.interfaces';
import { ProductModel } from '../../interfaces/product.interfaces';

export interface TopPageComponentProps{
    firstCategory: LevelCategory
    page: PageModal
    products: ProductModel[]
  }