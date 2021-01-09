package apiEngine;


public class EmployeePojo {
    public Integer id;
    public String name;
    public String emailID;
    public String mobile;

    /**
     * No args constructor for use in serialization
     *
     */
    public EmployeePojo() {
    }

    /**
     *
     * @param name
     * @param mobile
     * @param emailID
     * @param id
     */
    public EmployeePojo(Integer id, String name, String emailID, String mobile) {
        super();
        this.id = id;
        this.name = name;
        this.emailID = emailID;
        this.mobile = mobile;
    }

}