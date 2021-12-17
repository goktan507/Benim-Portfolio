package gcu.edu.Benim.Portfolio.Data;


import gcu.edu.Benim.Portfolio.Data.JPAModels.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DAO (Data Access Object) Service for Portfolio model
 * Extends JPA Repository to implement all the database functionalities
 */
@Repository
public interface PortfolioDAO extends JpaRepository<Portfolio, Long> {
}
