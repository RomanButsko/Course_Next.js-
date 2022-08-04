import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPage = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div>
            {products && products.length}
        </div>
    );
};
