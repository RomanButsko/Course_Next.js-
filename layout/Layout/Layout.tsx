import { LayoutProp } from './Layout.props';
import cn from 'classnames';
import style from './Rating.module.css';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import { Component, FunctionComponent } from 'react';


const Layout = ({children}: LayoutProp): JSX.Element => {
    return (
        <>
        <Header /> 
        <div>
        <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
        </>
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