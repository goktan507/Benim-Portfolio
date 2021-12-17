package gcu.edu.Benim.Portfolio.Business;

import gcu.edu.Benim.Portfolio.Data.JPAModels.Skills;
import gcu.edu.Benim.Portfolio.Data.SkillsDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for Portfolio model
 * Becomes the bridge between the PortfolioController and PortfolioDAO
 * All the necessary database functionality occurs here using JPA built-in functions
 */
@Service
public class SkillsService {

    @Autowired
    private SkillsDAO dao;

    // Default Constructor
    public SkillsService(){
    }

    // Returns all the skills stored in the database
    //      - If there is non exists, returns empty list
    public List<Skills> getAllSkills(){
        List<Skills> skills = dao.findAll();
        return skills;
    }

    // Returns the created skills
    //      - If the creation is successful.
    public Skills createSkills(Skills skills){
        return dao.save(skills);
    }

    // Returns the updated skills
    //      - If the update is successful.
    public Skills updateSkills(Long id, Skills updatedSkills){
        Skills s = dao.findById(id).get();
        s.setExperience(updatedSkills.getExperience());
        s.setSkill_description(updatedSkills.getSkill_description());
        s.setPortfolio_portfolioID(updatedSkills.getPortfolio_portfolioID());
        return dao.save(s);
    }

    // Does not require to return anything.
    // Deletes the skills with the given ID
    public void deleteSkills(Long id){
        dao.delete(dao.findById(id).get());
    }
}
