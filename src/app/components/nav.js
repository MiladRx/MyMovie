import React from 'react';
import Link from 'next/link';



function Nav() {
    return (
        <div className="mt-5 navbar bg-base-100 relative  w-full">
            <div className=" navbar-start">

            </div>
            <div className="navbar-center">
                <Link href="#" className='className="btn btn-ghost text-lg'><h2>MyMovies</h2></Link>
            </div>
            <div className="navbar-end">
                <input type="checkbox" value="synthwave" className="toggle mr-5 theme-controller" />
            </div>

        </div>

    );
}

export default Nav;
