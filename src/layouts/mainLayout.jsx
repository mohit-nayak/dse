import * as React from 'react';
import NavBar from '../components/common/NavBar/NavBar';
import Footer from '../components/common/Footer/Footer';
import '../scss/global.scss';

function MainLayout({children, navAbsolute = true, navLight = false}) {
    return (
        <div className={`main-layout`}>
            <NavBar absolute={navAbsolute} light={navLight} />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;