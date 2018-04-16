@invalidLogin
Feature: Login function
    As a role
    I want feature

Background:
   Given I am a guest user
   When I open 'Home' page
   Then I should see 'myAccount' element
   When I click 'myAccount' element
   When I click 'signIn' element
   Then I should go to 'Login' page

Scenario Outline: Login with Invalid Credentials
   When I input <email> into 'tbEmail' element
   When I input <password> into 'tbPassword' element
   When I click 'btnLogIn' element
   Then I wait for 3 seconds
   Then I should see <message> element
    Examples:
    | email           | password    | message                 |
    | ''              | 'test1234'  | 'txtEmailRequired'      |
    | 'test@pwc.com'  | ''          | 'txtPwdRequired'        |
#    | 'test@pwc.com'  | 'test1234'  | 'txtInvalid'            |
#    | 'test.com'      | 'test1234'  | 'txtInvalidEmailFormat' |

