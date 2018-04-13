@login
Feature: Login function
  As a role
  I want feature

  Scenario: Login as a guest
    Given I am a guest user
    When I open 'Home' page
    Then I should see 'myAccount' element
    When I click 'myAccount' element