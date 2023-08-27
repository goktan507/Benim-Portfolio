package gcu.edu.Benim.Portfolio.Models;

/**
 * DTO (Data Transfer Object) creates a JSON response
 *      with a response code of either success (200) or failure (4xx, 500)
 *      with a response message to identify the result of the action
 *      with a data associated/returned with the action
 */
public class DTO {

    private int ResponseCode;
    private String ResponseMessage;
    private Object data;

    // Non-Default Constructor
    public DTO(int responseCode, String responseMessage, Object data) {
        this.ResponseCode = responseCode;
        this.ResponseMessage = responseMessage;
        this.data = data;
    }

    // All the getters and setters for DTO model

    public int getResponseCode() {
        return ResponseCode;
    }

    public void setResponseCode(int responseCode) {
        this.ResponseCode = responseCode;
    }

    public String getResponseMessage() {
        return ResponseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.ResponseMessage = responseMessage;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
