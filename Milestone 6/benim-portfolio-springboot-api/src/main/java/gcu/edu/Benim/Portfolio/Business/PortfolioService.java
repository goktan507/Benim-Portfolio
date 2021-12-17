package gcu.edu.Benim.Portfolio.Business;

import gcu.edu.Benim.Portfolio.Data.PortfolioDAO;
import gcu.edu.Benim.Portfolio.Data.JPAModels.Portfolio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for Portfolio model
 * Becomes the bridge between the PortfolioController and PortfolioDAO
 * All the necessary database functionality occurs here using JPA built-in functions
 */
@Service
public class PortfolioService{

    @Autowired
    private PortfolioDAO dao;

    // Default Constructor
    public PortfolioService(){
    }

    // Returns all the portfolios stored in the database
    //      - If there is non exists, returns empty list
    public List<Portfolio> getAllPortfolios(){
        List<Portfolio> portfolios = dao.findAll();
        return portfolios;
    }

    // Returns the created portfolio
    //      - If the creation is successful.
    public Portfolio createPortfolio(Portfolio newPortfolio){
        return dao.save(newPortfolio);
    }

    // Returns the updated portfolio
    //      - If the update is successful.
    public Portfolio updatePortfolio(Long id, Portfolio updatedPortfolio){
        Portfolio p = dao.findById(id).get();
        p.setFirstName(updatedPortfolio.getFirstName());
        p.setLastName(updatedPortfolio.getLastName());
        p.setEducation(updatedPortfolio.getEducation());
        p.setGpa(updatedPortfolio.getGpa());
        p.setResume(updatedPortfolio.getResume());

        return dao.save(p);
    }

    // Does not require to return anything.
    // Deletes the portfolio with the given ID
    public void deletePortfolio(Long id){
        dao.delete(dao.findById(id).get());
    }
}
