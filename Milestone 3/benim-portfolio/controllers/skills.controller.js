const service = require("../services/skills.service");
const {DTO} = require("../models/DTO");


/*
*   Calls the skills service to return all skills
*   then returns the result in DTO model as JSON
*/
exports.getSkills = (req, res, next) => {
    service.getSkills(req, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        let dto = DTO(200, "Success", results)
        res.json(dto);
    });
};

/*
*   Calls the skills service to create the given skills
*   then returns the result in DTO model as JSON
*/
exports.createSkills = (req, res, next) => {
    service.createSkills(req.body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: "Bad Request" + error });
        }
        let dto = DTO(200, "Success", results)
        res.json(dto);
    });
};

/*
*   Calls the skills service to update a row of skills with the given ID
*   then returns the result in DTO model as JSON
*/
exports.updateSkills = (req, res, next) => {
    service.updateSkills(req, req.body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: "Bad Request" + error });
        }
        let dto = DTO(200, "Success", results)
        res.json(dto);
    });
};

/*
*   Calls the skills service to delete a row of skills with the given ID
*   then returns the result in DTO model as JSON
*/
exports.deleteSkills = (req, res, next) => {
    service.deleteSkills(req, (error, results) => {
        if (error) {
            //dto.message = "Bad Request";
            return res.status(400).send({ success: 0, data: "Bad Request" + error });
        }
        let dto = DTO(200, "Success", results)
        res.json(dto);
    });
};

