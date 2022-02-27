import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';


function NaveBarClass (){

    // const myState= useSelector((state)=> state.added )


        return (
            <>
                <Nav activeKey="/home" className="bg-success p-2 text-white bg-opacity-75 p-3"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
                    <Nav.Item>
                        <Link to="/" className="navbar-brand" style={{color:'white'}}> Home </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/movies" className="navbar-brand" style={{color:'white'}}> Movies </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/favorits" className="navbar-brand" style={{color:'white'}}> Favorites </Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                    <Link to="/register" className="navbar-brand" style={{color:'white'}}> Register </Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link to="/login" className="navbar-brand"style={{color:'white'}} > Login  </Link>
                    </Nav.Item>   
                </Nav>
            </>
        )
   
}

export default NaveBarClass 