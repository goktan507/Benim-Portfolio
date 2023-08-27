package gcu.edu.Benim.Portfolio.Controllers;

import gcu.edu.Benim.Portfolio.Business.SkillsService;
import gcu.edu.Benim.Portfolio.Data.JPAModels.Skills;
import gcu.edu.Benim.Portfolio.Models.DTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *  Controller class for Skills model to implement all the REST-ful API actions
 */
@RestController
public class SkillsController {
    @Autowired
    private SkillsService service;
    private DTO dto;

    // Non-Default Constructor
    public SkillsController(SkillsService service){
        this.service = service;
    }

    // API GET call for {application:host}/skills to pull all the skills stored in database
    // returns the DTO model with the result data and necessary server-end information
    @GetMapping("/skills")
    DTO allSkills(){
        dto = new DTO(200, "Returned All Skills!", this.service.getAllSkills());
        return dto;
    }

    // API POST call for {application:host}/skills to create a skills row in database
    // returns the DTO model with the result data and necessary server-end information
    @PostMapping("/skills")
    DTO newSkills(@RequestBody Skills newSkills){
        dto = new DTO(200, "Created Skills with skillsID = " + newSkills.getSkillsID(), this.service.createSkills(newSkills));
        return dto;
    }

    // API PUT call for {application:host}/skills/{id} to update the skills row in database with the given ID
    // returns the DTO model with the result data and necessary server-end information
    @PutMapping("/skills/{id}")
    DTO updatedSkills(@RequestBody Skills updatedSkills, @PathVariable Long id){
        dto = new DTO(200, "Updated Skills with ID = " + id , this.service.updateSkills(id, updatedSkills));
        return dto;
    }

    // API DELETE call for {application:host}/skills/{id} to delete the skills row in database with the given ID
    // returns the DTO model with the result data and necessary server-end information
    @DeleteMapping("/skills/{id}")
    DTO deleteSkills(@PathVariable Long id){
        this.service.deleteSkills(id);
        dto = new DTO(200, "Removed Skills with ID = " + id, null);
        return dto;
    }
}
