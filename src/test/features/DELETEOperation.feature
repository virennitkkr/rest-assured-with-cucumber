Feature: Verify different DELETE operations using REST-assured
  Scenario: Verify one Employee Registration
           Given A new employee details
           When admin want to delete employee of ID 100
           Then verify admin can delete employee Successfully

  Scenario: Verify one Employee Registration
    Given A new employee details
    When admin want to delete employee of ID 101
    Then verify admin can delete employee Successfully
  @Smock
  Scenario: Verify one Employee Registration
    Given A new employee details
    When admin want to delete employee of ID 150
    Then verify admin can delete employee Successfully