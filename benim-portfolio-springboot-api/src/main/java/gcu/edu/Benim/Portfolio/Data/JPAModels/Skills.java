package gcu.edu.Benim.Portfolio.Data.JPAModels;

import javax.persistence.*;

/*
    Entity object/model for JPA database implementation
 */
@Entity
public class Skills {

    @Id
    @Column(
            name= "skillsID"
    )
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long skillsID;

    @Column(
            name= "skill_description"
    )
    private String skill_description;

    @Column(
            name= "experience"
    )
    private int experience;

    @Column(
            name= "portfolio_portfolioID"
    )
    private Long portfolio_portfolioID;

    // Non-Default Constructor
    public Skills(Long skillsID, String skill_description, int experience, Long portfolio_portfolioID) {
        this.skillsID = skillsID;
        this.skill_description = skill_description;
        this.experience = experience;
        this.portfolio_portfolioID = portfolio_portfolioID;
    }

    // Default Constructor
    public Skills()
    {

    }

    // All the getters and setters for skills model

    public Long getSkillsID() {
        return skillsID;
    }

    public void setSkillsID(Long skillsID) {
        this.skillsID = skillsID;
    }

    public String getSkill_description() {
        return skill_description;
    }

    public void setSkill_description(String skill_description) {
        this.skill_description = skill_description;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public Long getPortfolio_portfolioID() {
        return portfolio_portfolioID;
    }

    public void setPortfolio_portfolioID(Long portfolio_portfolioID) {
        this.portfolio_portfolioID = portfolio_portfolioID;
    }
}
