package gcu.edu.Benim.Portfolio.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String HomePage(){
        return "HomePage";
    }

}
