import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminNavbar from "./admin-Navbar";
import './admin-login.css';
import { Redirect, Link} from "react-router-dom";

class Admin extends React.Component {

    render() {
        if (JSON.parse(sessionStorage.getItem("username")) !== "safabayraktar" || JSON.parse(sessionStorage.getItem("password")) !== "Goktan150150") {
            return (
                <div>
                    <AdminNavbar />
                    <div className="Login">
                        <Form onSubmit={(e) => {
                            // e.preventDefault(); 
                            sessionStorage.setItem("username", JSON.stringify(e.target.username.value));
                            sessionStorage.setItem("password", JSON.stringify(e.target.password.value));
                            <Redirect to="/admin-portfolios" />
                        }}>
                            <Form.Group size="lg" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                />
                            </Form.Group>
                            <Button size="lg" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div >
            )
        }

        return (
            <div>
                <AdminNavbar />
                <br></br>
                <div className="Login">
                    <h5 > Logged in as Admin </h5>
                    <Link className="btn btn-outline-primary my-2 my-sm-0" to="/logout">Logout</Link>
                </div>
            </div>
        )
    }
}

export default Admin;