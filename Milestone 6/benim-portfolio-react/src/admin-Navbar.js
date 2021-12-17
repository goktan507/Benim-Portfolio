import React from "react";
import { Link } from "react-router-dom";
import './style.css';

class AdminNavbar extends React.Component {

    render() {
        return (
            <div className="admin-nav">
                <ul>
                    <li><Link className="admin-li btn btn-outline-dark" to="/alohomora">Admin - Home</Link> </li>
                    <li><Link className="admin-li btn btn-outline-dark" to="/admin-portfolios">Portfolios</Link></li>
                    <li><Link className="admin-li btn btn-outline-dark" to="/admin-skills">Skills</Link></li >
                </ul >
            </div >
        )
    }
}


export default AdminNavbar;