import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
} from "./NavbarElements";
 
function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" reloadDocument>
                        Home
                    </NavLink>
                    <NavLink to="/Heroes" reloadDocument>
                        Heroes
                    </NavLink>
                    <NavLink to="/Comics" reloadDocument>
                        Comics
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;