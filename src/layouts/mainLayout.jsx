import * as React from "react";
import NavBar from "../components/NavBar/NavBar";
import '../scss/global.scss';

function MainLayout({children}) {
    return (
        <div className={`main-layout`}>
            <NavBar absolute={true} />
            {children}
        </div>
    );
}

export default MainLayout;