@login
Feature: Login function
    As a role
    I want feature

 Scenario: Login as a guest
   Given I am a guest user
   When I open 'Home' page
   Then I should see 'myAccount' element
   When I click 'myAccount' element
   When I click 'signIn' element
   Then I should go to 'Login' page
#   Then I should see 'txtLogin' element
   When I input 'test@pwc.com' into 'tbEmail' element
   When I input 'test1234' into 'tbPassword' element
   When I click 'btnLogIn' element
   Then I wait for 3 seconds
   Then I should see 'txtInvalid' element

