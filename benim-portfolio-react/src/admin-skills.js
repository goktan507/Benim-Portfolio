import React from "react";
import AdminNavbar from "./admin-Navbar";
import './admin-login.css';
import axios from "axios";
import dataSource from "./dataSource";
import { GrAddCircle } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosReturnLeft } from "react-icons/io";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AdminSkills extends React.Component {

    state = { skills: [], portfolioIDs: [], type: "view", selectedID: -1 };

    loadData = async () => {
        const response = await dataSource.get('/skills');
        const portfolioResponse = await dataSource.get('/portfolios');
        let portfolioIDs = portfolioResponse.data.data.map(
            (portfolio) => {
                return (
                    <div>
                        {portfolio.portfolioID + " - " + portfolio.first_name + " " + portfolio.last_name}
                    </div>
                )
            }
        );
        this.setState({ skills: response.data.data, portfolioIDs: portfolioIDs });
    }

    componentDidMount() {
        this.loadData();
    }

    deleteSkills = (id) => {
        axios.delete("http://localhost:3000/skill/" + id)
            .then(() => {
                this.loadData();
            })
    }

    updateSkills = (skills) => {
        let newSkills = {
            skillsid: skills.skillsid.value,
            experience: skills.experience.value,
            skill_description: skills.skill_description.value,
            portfolio_portfolioID: skills.portfolio_portfolioid.value
        };
        console.log(newSkills);
        axios.put("http://localhost:3000/skill/" + skills.skillsid.value, newSkills)
            .then(() => {
                this.loadData();
            })
            .catch(error => {
                console.log(error)
            });
    }

    createSkills = (skills) => {
        let newSkills = {
            experience: skills.experience.value,
            skill_description: skills.skill_description.value,
            portfolio_portfolioID: skills.portfolio_portfolioid.value
        };
        axios.post("http://localhost:3000/skill", newSkills)
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
                const skillsList = this.state.skills.map(
                    (skill) => {
                        return (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{skill.skill_description}</h5>
                                    <p className="card-text">Experience: {skill.experience} Years</p>
                                    <div className="center-margin">
                                        <span className="icon-margin" onClick={() => {
                                            this.setState({ selectedID: skill.skillsid, type: "edit" });
                                        }}><FiEdit size="40px" /></span>

                                        <span className="center-margin" onClick={() => {
                                            this.deleteSkills(skill.skillsid)
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
                            {skillsList}
                        </div>
                    </div>
                )
            }
            else if (this.state.type === "edit") {
                let skills = this.state.skills;
                let selectedSkills;
                for (let i = 0; i < skills.length; i++) {
                    if (skills[i].skillsid === this.state.selectedID) {
                        selectedSkills = skills[i];
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
                                    this.updateSkills(e.target);
                                    this.setState({ type: "view" });
                                }}>
                                    <Form.Group size="lg" controlId="skillsid">
                                        <Form.Label>SkillsID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled={true}
                                            defaultValue={selectedSkills.skillsid}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="experience">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Control
                                            autoFocus
                                            type="text"
                                            defaultValue={selectedSkills.experience}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="skill_description">
                                        <Form.Label>Skill Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={selectedSkills.skill_description}
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="portfolio_portfolioid">
                                        <Form.Label>PortfolioID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={selectedSkills.portfolio_portfolioid}
                                        />
                                    </Form.Group>
                                    <Button size="lg" type="submit">
                                        Edit
                                    </Button>
                                </Form>
                            </div>
                            <div className="center">
                                <div>
                                    Choose a portfolioID given below
                                </div>
                                <div>
                                    {this.state.portfolioIDs}
                                </div>
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
                                this.setState({ type: "view" });
                            }}>
                                <IoIosReturnLeft size="60px" />
                            </span>
                            <div className="center">
                                <Form onSubmit={(e) => {
                                    this.createSkills(e.target);
                                    this.setState({ type: "view" });
                                }}>
                                    <Form.Group size="lg" controlId="experience">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Experience in Years"
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="skill_description">
                                        <Form.Label>Skill Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Skill Description"
                                        />
                                    </Form.Group>
                                    <Form.Group size="lg" controlId="portfolio_portfolioid">
                                        <Form.Label>PortfolioID</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="portfolioID"
                                        />
                                    </Form.Group>
                                    <Button size="lg" type="submit">
                                        Create
                                    </Button>
                                </Form>
                            </div>
                            <div className="center">
                                <div>
                                    Choose a portfolioID given below
                                </div>
                                <div>
                                    {this.state.portfolioIDs}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return (
            <Redirect to="/alohomora" />
        )
    }
}

export default AdminSkills;