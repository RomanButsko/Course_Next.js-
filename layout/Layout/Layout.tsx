import { LayoutProp } from './Layout.props';
import style from './Layout.module.css';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import {FunctionComponent } from 'react';


const Layout = ({children}: LayoutProp): JSX.Element => {
    return (
        <div className={style.layout}>
        <Header className={style.header}/> 
        <Sidebar  className={style.sidebar} />
            <div className={style.body}>
                {children}
            </div>
        <Footer className={style.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element { 
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};