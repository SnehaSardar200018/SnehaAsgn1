import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to='/'>about us </Link>
                <br />
                <Link to='/square'>contact us</Link>
            </BrowserRouter>
        </div>
    );
}
export default Menu;