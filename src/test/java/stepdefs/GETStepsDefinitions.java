package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import methods.BDDStyledMethod;
import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

public class GETStepsDefinitions {


	private String ENDPOINT_GET_BOOK_BY_ISBN = "http://localhost:3000/user/";


	// retrive user by ID
	@When("^retrieve one user by ID (\\d+)$")
	public void retriveOneUserByID(int id) {
		BDDStyledMethod.SimpleGET(id);
	}


	@Given("^a list of user details$")
	public void aListOfUserDetails() {
	}

	@Then("^I should see the All users names$")
	public void iShouldSeeTheAllUsersNames() {
		BDDStyledMethod.PerformContainsCollection();
	}

	@Given("^I perform GET operation for \"([^\"]*)\"$")
	public void iPerformGETOperationFor(String arg0) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^retrieve one user by UserID (\\d+)$")
	public void retrieveOneUserByUserID(int id) {
		BDDStyledMethod.SimpleGET(id);
	}

	@Then("^I should see company name of Virendra is Altimetrik$")
	public void iShouldSeeComapnyNameOfVirendraIsAltimetrik() {
    BDDStyledMethod.FindComapanyName(3);
	}

	@Then("^I should see company name of Virendra is CitiBank$")
	public void iShouldSeeCompanyNameOfVirendraIsCitiBank() {

	}
}


