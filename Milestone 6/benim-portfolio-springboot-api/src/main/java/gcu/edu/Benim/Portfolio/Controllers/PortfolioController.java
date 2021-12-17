package gcu.edu.Benim.Portfolio.Controllers;

import gcu.edu.Benim.Portfolio.Business.PortfolioService;
import gcu.edu.Benim.Portfolio.Data.JPAModels.Portfolio;
import gcu.edu.Benim.Portfolio.Models.DTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *  Controller class for Portfolio model to implement all the REST-ful API actions
 */
@RestController
public class PortfolioController {
    @Autowired
    private PortfolioService service;
    private DTO dto;

    // Non-Default Constructor
    public PortfolioController(PortfolioService service){

        this.service = service;
    }

    // API GET call for {application:host}/portfolio to pull all the portfolio stored in database
    // returns the DTO model with the result data and necessary server-end information
    @GetMapping("/portfolios")
    DTO allPortfolios(){
        dto = new DTO(200, "Returned All portfolios!", this.service.getAllPortfolios());
        return dto;
    }

    // API POST call for {application:host}/portfolio to create a portfolio row in database
    // returns the DTO model with the result data and necessary server-end information
    @PostMapping("/portfolios")
    DTO newPortfolio(@RequestBody Portfolio newPortfolio){
        dto = new DTO(200, "Created portfolio with portfolio ID = " + newPortfolio.getPortfolioID(), this.service.createPortfolio(newPortfolio));
        return dto;
    }

    // API PUT call for {application:host}/portfolio/{id} to update the portfolio row in database with the given ID
    // returns the DTO model with the result data and necessary server-end information
    @PutMapping("/portfolios/{id}")
    DTO updatePortfolio(@RequestBody Portfolio updatedPortfolio, @PathVariable Long id){
        dto = new DTO(200, "Updated portfolio with ID = " + id , this.service.updatePortfolio(id, updatedPortfolio));
        return dto;
    }

    // API DELETE call for {application:host}/portfolio/{id} to delete the portfolio row in database with the given ID
    // returns the DTO model with the result data and necessary server-end information
    @DeleteMapping("/portfolios/{id}")
    DTO deletePortfolio(@PathVariable Long id){
        this.service.deletePortfolio(id);
        dto = new DTO(200, "Removed portfolio with ID = " + id, null);
        return dto;
    }

}
