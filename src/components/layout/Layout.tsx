import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="wrap">
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
