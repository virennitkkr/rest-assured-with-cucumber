$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DELETEOperation.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different DELETE operations using REST-assured",
  "description": "",
  "id": "verify-different-delete-operations-using-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify one Employee Registration",
  "description": "",
  "id": "verify-different-delete-operations-using-rest-assured;verify-one-employee-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "A new employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "admin want to delete employee of ID 100",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "verify admin can delete employee Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "POSTStepsDefinitions.aNewEmployeeDetails()"
});
formatter.result({
  "duration": 91664500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 36
    }
  ],
  "location": "DeleteStepsDefinitions.adminWantToDeleteEmployeeOfID(int)"
});
formatter.result({
  "duration": 1765295300,
  "status": "passed"
});
formatter.match({
  "location": "DeleteStepsDefinitions.verifyAdminCanDeleteEmployeeSuccessfully()"
});
formatter.result({
  "duration": 44412400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify one Employee Registration",
  "description": "",
  "id": "verify-different-delete-operations-using-rest-assured;verify-one-employee-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "A new employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "admin want to delete employee of ID 101",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify admin can delete employee Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "POSTStepsDefinitions.aNewEmployeeDetails()"
});
formatter.result({
  "duration": 66600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 36
    }
  ],
  "location": "DeleteStepsDefinitions.adminWantToDeleteEmployeeOfID(int)"
});
formatter.result({
  "duration": 18176500,
  "status": "passed"
});
formatter.match({
  "location": "DeleteStepsDefinitions.verifyAdminCanDeleteEmployeeSuccessfully()"
});
formatter.result({
  "duration": 20640000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify one Employee Registration",
  "description": "",
  "id": "verify-different-delete-operations-using-rest-assured;verify-one-employee-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smock"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "A new employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "admin want to delete employee of ID 150",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify admin can delete employee Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "POSTStepsDefinitions.aNewEmployeeDetails()"
});
formatter.result({
  "duration": 59600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 36
    }
  ],
  "location": "DeleteStepsDefinitions.adminWantToDeleteEmployeeOfID(int)"
});
formatter.result({
  "duration": 17623900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteStepsDefinitions.verifyAdminCanDeleteEmployeeSuccessfully()"
});
formatter.result({
  "duration": 16892700,
  "status": "passed"
});
formatter.uri("GETOperation.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different GET operations using REST-assured",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify one employee by userID",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-one-employee-by-userid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "a list of user details",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "retrieve one user by ID 1",
  "keyword": "Then "
});
formatter.match({
  "location": "GETStepsDefinitions.aListOfUserDetails()"
});
formatter.result({
  "duration": 131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "GETStepsDefinitions.retriveOneUserByID(int)"
});
formatter.result({
  "duration": 611180300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Company Name of employee",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-company-name-of-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "a list of user details",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see company name of Virendra is Altimetrik",
  "keyword": "Then "
});
formatter.match({
  "location": "GETStepsDefinitions.aListOfUserDetails()"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "location": "GETStepsDefinitions.iShouldSeeComapnyNameOfVirendraIsAltimetrik()"
});
formatter.result({
  "duration": 63683800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Company Name of employee",
  "description": "",
  "id": "verify-different-get-operations-using-rest-assured;verify-company-name-of-employee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "a list of user details",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I should see company name of Virendra is CitiBank",
  "keyword": "Then "
});
formatter.match({
  "location": "GETStepsDefinitions.aListOfUserDetails()"
});
formatter.result({
  "duration": 94300,
  "status": "passed"
});
formatter.match({
  "location": "GETStepsDefinitions.iShouldSeeCompanyNameOfVirendraIsCitiBank()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.uri("GetBookByISBN.feature");
formatter.feature({
  "line": 1,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ],
      "line": 8
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ],
      "line": 11
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ],
      "line": 12
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "BookStepDefinitions.a_book_exists_with_isbn(String)"
});
formatter.result({
  "duration": 2097900,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 957284700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "BookStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 369900,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 29448100,
  "status": "passed"
});
formatter.match({
  "location": "BookStepDefinitions.response_contains_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 45109000,
  "status": "passed"
});
formatter.uri("POSTOperation.feature");
formatter.feature({
  "line": 1,
  "name": "Verify different POST operations using REST-assured",
  "description": "",
  "id": "verify-different-post-operations-using-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify one Employee Registration",
  "description": "",
  "id": "verify-different-post-operations-using-rest-assured;verify-one-employee-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smock"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "A new employee details",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify employee Registration completed Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "POSTStepsDefinitions.aNewEmployeeDetails()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "location": "POSTStepsDefinitions.verifyEmployeeRegistrationCompletedSuccessfully()"
});
formatter.result({
  "duration": 15812700,
  "status": "passed"
});
});