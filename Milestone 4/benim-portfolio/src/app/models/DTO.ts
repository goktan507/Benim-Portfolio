// Data Transfer Object was implemented in API application
// When we make a request from this application to API app
// We recieve a DTO object, and in order for us to read it
// We need the recieved package to be initialized into a
// DTO object this end as well.
export class DTO {

    ResponseCode: number = 0;
    ResponseMessage: string = "";
    data: any;
    
    constructor(rc: number, rm: string, data: any) {
        this.ResponseCode = rc;
        this.ResponseMessage = rm;
        this.data = data;
    }
}