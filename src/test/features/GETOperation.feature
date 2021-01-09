Feature: Verify different GET operations using REST-assured
  Scenario: Verify one employee by userID
           Given a list of user details
           Then  retrieve one user by ID 1
@Smoke
  Scenario: Verify Company Name of employee
            Given a list of user details
            Then  I should see company name of Virendra is Altimetrik
  Scenario: Verify Company Name of employee
           Given a list of user details
           Then  I should see company name of Virendra is CitiBank