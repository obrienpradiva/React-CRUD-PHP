import React from 'react';
import  {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

function Header(){
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <div className="navbar-header">
                    <Link to={'/'} className="navbar-brand" href="/">CRUD-TEST</Link>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link">Home</Link></li>
                        <li><Link to={'/insert'} className="nav-link">Insert</Link></li>
                        <li><Link to={'/view'} className="nav-link">View</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header