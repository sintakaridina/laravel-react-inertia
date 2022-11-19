//import React
import React from 'react';

//import Link
import { Link } from '@inertiajs/inertia-react';

function Layout({ children }) {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">TODO LIST APP</Link>
                    </div>
                </nav>
            </header>
            <main className="container mt-5 px-lg-5">
                { children }
            </main>
        </>
    )

}

export default Layout