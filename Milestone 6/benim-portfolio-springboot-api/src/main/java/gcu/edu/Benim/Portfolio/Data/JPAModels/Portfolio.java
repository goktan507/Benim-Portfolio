package gcu.edu.Benim.Portfolio.Data.JPAModels;

import javax.persistence.*;

/*
    Entity object/model for JPA database implementation
 */
@Entity
public class Portfolio {

    @Id
    @Column(
            name= "portfolioID",
            nullable = false
    )
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long portfolioID;

    @Column(
            name= "first_name",
            nullable = false
    )
    private String firstName;

    @Column(
            name= "last_name",
            nullable = false
    )
    private String lastName;

    @Column(
            name= "gpa",
            nullable = false
    )
    private double gpa;

    @Column(
            name= "resume",
            nullable = false
    )
    private String resume;

    @Column(
            name= "education",
            nullable = false
    )
    private String education;

    // Default Constructor
    public Portfolio() {
    }

    // Non-Default Constructor
    public Portfolio(Long portfolioID, String firstName, String lastName, double gpa, String resume, String education) {
        this.portfolioID = portfolioID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gpa = gpa;
        this.resume = resume;
        this.education = education;
    }


    // All the getters and setters for the portfolio model

    public Long getPortfolioID() {
        return portfolioID;
    }

    public void setPortfolioID(Long portfolioID) {
        this.portfolioID = portfolioID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getGpa(){
        return this.gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }
}
