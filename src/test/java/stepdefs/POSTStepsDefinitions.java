package stepdefs;

import apiEngine.EmployeePojo;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.com.google.gson.JsonArray;
import gherkin.deps.com.google.gson.JsonObject;
import io.restassured.path.json.JsonPath;
import methods.BDDStyledMethod;
import methods.Testdata;

import java.io.File;

public class POSTStepsDefinitions {

	@Given("^A new employee details$")
	public void aNewEmployeeDetails() {
	}

	@Then("^verify employee Registration completed Successfully$")
	public void verifyEmployeeRegistrationCompletedSuccessfully() {
		//EmployeePojo payout = new EmployeePojo(10,"viren","viren@ba.com","9910882289");
		File file = new File("src/test/JSON/employee.json");
        // String payout = "{\"id\":6,\"Name\":\"viren\",\"EmailID\":\"viren@gmail.com\",\"Mobile\":\"9910882229\"}";

		BDDStyledMethod.AddEmployee(file);
	}


}


