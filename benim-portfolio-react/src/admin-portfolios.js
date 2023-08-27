import React from "react";
import { Redirect } from "react-router-dom";
import AdminNavbar from "./admin-Navbar";
import './admin-login.css';
import dataSource from "./dataSource";
import { GrAddCircle } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosReturnLeft } from "react-icons/io";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AdminPortfolios extends React.Component {

    state = { portfolios: [], type: "view", selectedID: -1 };

    loadData = async () => {
        const response = await dataSource.get('/portfolios');
        this.setState({ portfolios: response.data.data });
    }

    componentDidMount() {
        this.loadData();
    }

    deletePortfolio = (id) => {
        axios.delete("http://localhost:3000/portfolio/" + id)
            .then(() => {
                this.loadData();
            })
            
    }

    updatePortfolio = (portfolio) => {
        let newPortfolio = {
            portfolioID: portfolio.portfolioID.value,
            first_name: portfolio.firstName.value,
            last_name: portfolio.lastName.value,
            gpa: portfolio.gpa.value,
            resume: portfolio.resume.value,
            education: portfolio.education.value
        };
        axios.put("http://localhost:3000/portfolio/" + portfolio.portfolioID.value, newPortfolio)
            .then(() => {
                this.loadData();
            })
            .catch(error => {
                console.log(error)
            });
    }

    createPortfolio = (portfolio) => {
        let newPortfolio = {
            first_name: portfolio.firstName.value,
            last_name: portfolio.lastName.value,
            gpa: portfolio.gpa.value,
            resume: portfolio.resume.value,
            education: portfolio.education.value
        };
        axios.post("http://localhost:3000/portfolio", newPortfolio)
            .then(() => {
                this.loadData();
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        if (JSON.parse(sessionStorage.getItem("username")) === "safabayraktar" && JSON.parse(sessionStorage.getItem("password")) === "Goktan150150") {
            if (this.state.type === "view") {
                const portfolioList = this.state.portfolios.map(
                    (portfolio) => {
                        return (
                            <div className="card mb-3">
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{portfolio.first_name} {portfolio.last_name}</h5>
                                    <p className="card-text">{portfolio.education}</p>
                                    <p className="card-text"><small className="text-muted">GPA: {portfolio.gpa} </small> </p>
                                    <div className="center-margin">
                                        <span className="icon-margin" onClick={() => {
                                            this.setState({ selectedID: portfolio.portfolioID, type: "edit" });
                                        }}><FiEdit size="40px" /></span>

                                        <span className="center-margin" onClick={() => {
                                            this.deletePortfolio(portfolio.portfolioID)
                                        }}><RiDeleteBinLine size="40px" /></span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
                return (
                    <div>
                        <AdminNavbar />
                        <div className="Login">
                            <div className="center" onClick={() => {
                                this.setState({ type: "create" });
                            }}>
                                <GrAddCircle size="100px" />
                            </div>
                            {portfolioList}
                        </div>
                    </div>
                )
            }
            else if (this.state.type === "edit") {
                let portfolios = this.state.portfolios;
                let selectedPortfolio;
                for (let i = 0; i < portfolios.length; i++) {
                    if (portfolios[i].portfolioID === this.state.selectedID) {
                        selectedPortfolio = portfolios[i];
                    }
                }
                return (
                    <div>
                        <AdminNavbar />
                        <div className="Login">
                            <span onClick={() => {
                                this.setState({ type: "view" });
                            }}>
                                <IoIosReturnLeft size="60px" />
                            </span>
                            <div className="center">
                                <Form onSubmit={(e) => {
                                    this.updatePortfolio(e.target);
                                    this.setState({ type: "view" });
                                }}>
                                    <Form.Group size="lg" controlId="portfolioID">
                                        <Form.Label>PortfolioID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled={true}
                                            defaultValue={selectedPortfolio.portfolioID}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="text"
                                            defaultValue={selectedPortfolio.first_name}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={selectedPortfolio.last_name}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="education">
                                        <Form.Label>Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={selectedPortfolio.education}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="gpa">
                                        <Form.Label>GPA</Form.Label>
                                        <Form.Control
                                            type="number"
                                            defaultValue={selectedPortfolio.gpa}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="resume">
                                        <Form.Label>Resume</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={selectedPortfolio.resume}
                                        />
                                    </Form.Group>
                                    <Button size="lg" type="submit">
                                        Edit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                )

            }
            else if (this.state.type === "create") {
                return (
                    <div>
                        <AdminNavbar />
                        <div className="Login">
                        <span onClick={() => {
                                this.setState({type:"view"});
                            }}>
                                <IoIosReturnLeft size="60px"/>
                            </span>
                            <div className="center">
                                <Form onSubmit={(e) => {
                                    this.createPortfolio(e.target);
                                    this.setState({ type: "view" });
                                }}>
                                    <Form.Group size="lg" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="education">
                                        <Form.Label>Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Education"
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="gpa">
                                        <Form.Label>GPA</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder={4.0}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="resume">
                                        <Form.Label>Resume</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="image url"
                                        />
                                    </Form.Group>
                                    <Button size="lg" type="submit">
                                        Create
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }
            // return (
            //     <div>
            //         <AdminNavbar />
            //         <div className="Login">

            //         </div>
            //     </div>


            // )
        }
        return (
            <Redirect to="/alohomora" />
        )
    }
}

export default AdminPortfolios;