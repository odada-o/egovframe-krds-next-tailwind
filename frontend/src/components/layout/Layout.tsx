import React from 'react';
import Footer from './Footer';
import Header from './header';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useRouter();
    const isMainPage = location.pathname === '/';

    return (
        <div id="wrap">
            {/* <Header /> */}
            <div id="container">
                <div className={`inner ${!isMainPage ? 'in-between' : ''}`}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
