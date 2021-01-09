package stepdefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import methods.BDDStyledMethod;

import java.io.File;

public class DeleteStepsDefinitions {
    @When("^admin want to delete employee of ID (\\d+)$")
    public void adminWantToDeleteEmployeeOfID(int arg0) {
        File file = new File("src/test/JSON/AddEmp.json");
        BDDStyledMethod.AddEmployee(file);
    }

    @Then("^verify admin can delete employee Successfully$")
    public void verifyAdminCanDeleteEmployeeSuccessfully() {
         BDDStyledMethod.DeleteEmployee(100);
    }
}
