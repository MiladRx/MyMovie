import React from 'react';

function NavDetails() {
    return (
        <div className="navbar bg-100 relative top-10 w-full z-50">
            <div className="navbar-start">

            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-end">
                <input type="checkbox" value="synthwave" className="toggle mr-5 theme-controller" />
            </div>
        </div>
    );
}

export default NavDetails;
