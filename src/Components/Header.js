import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
            <div className="container name-nav-list"><h1 className="main-text">Guayerd Bikes</h1>
                <nav className="navigation">        
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>   
                </nav>
            </div>
            </header>
        );
    }
}

export default Header;