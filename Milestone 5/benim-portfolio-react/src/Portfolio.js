import React from "react";
import dataSource from "./dataSource";
import "./style.css";

class Portfolio extends React.Component {

    state = { portfolios: [] , skills: []};

    isPushable = (temp, portfolio) => {
        for (let x = 0; x < temp.length; x++) {
            if (temp[x].portfolioID === portfolio.portfolioID) {
                console.log("false", temp[x].portfolioID, portfolio.portfolioID)
                return false;
            }
        }
        return true;
    }

    loadData = async () => {
        const response = await dataSource.get('/portfolios');
        const skillsResponse = await dataSource.get('/skills');
        this.setState({ portfolios: response.data.data, skills: skillsResponse.data.data });
        console.log(this.state.portfolios, this.state.skills);
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        console.log(this.state.skills);
        const portfolioList = this.state.portfolios.map(
            (portfolio) => {
                let skillsList = this.state.skills.map(
                    (element) => {
                        if(element.portfolio_portfolioid === portfolio.portfolioID) {
                            return(
                                <div className="skills">
                                    <h5 className="card-title">{element.skill_description}</h5>
                                    <p className="card-text"><small className="text-muted">Experience: {element.experience} Years</small></p>
                                </div>
                            )
                        }
                        return(
                            <div></div>
                        )
                    }
                )
                return (
                    <div className="card mb-3">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{portfolio.firstName} {portfolio.lastName}</h5>
                            <p className="card-text">{portfolio.education}</p>
                            <p className="card-text"><small className="text-muted">GPA: {portfolio.gpa} </small> </p>
                        </div>
                        <div className="d-flex p-2">
                                {skillsList}
                        </div>
                    </div>
                )
            }
        )
        return (
            <div className="container">
                {portfolioList}
            </div>
        )
    }
}


export default Portfolio;