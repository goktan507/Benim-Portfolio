package gcu.edu.Benim.Portfolio.Data;

import gcu.edu.Benim.Portfolio.Data.JPAModels.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * DAO (Data Access Object) Service for Skills model
 * Extends JPA Repository to implement all the database functionalities
 */
@Repository
public interface SkillsDAO extends JpaRepository<Skills, Long> {
}
