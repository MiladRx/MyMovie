import React from 'react';
import Link from 'next/link';



function Nav() {
    return (
        <div className="navbar bg-base-100 relative top-10 w-full">
            <div className="mt- navbar-start">

            </div>
            <div className="navbar-center">
                <Link href="details" className='className="btn btn-ghost text-xl'>MyMovies</Link>
            </div>
            <div className="navbar-end">
                <input type="checkbox" value="synthwave" className="toggle mr-5 theme-controller" />
            </div>
        </div>
    );
}

export default Nav;
