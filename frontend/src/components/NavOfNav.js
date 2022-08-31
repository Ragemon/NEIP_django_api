import React from "react";

import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";


const NavOfNav = () =>{
    return (
        <Nav className="navbar navbar-light media-top"  id="first-nav">
            <div className="container-fluid">
                <span>
                   
                        <li><Link to="/" style={{textDecoration:"none", color:"white"}}>Dashboard</Link></li>
                    
                </span>
            </div>
            
        </Nav>
       
        
    )
}

export default NavOfNav;