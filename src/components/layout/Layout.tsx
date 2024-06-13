import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeaderTop from './HeaderTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="wrap">
            <HeaderTop />
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
