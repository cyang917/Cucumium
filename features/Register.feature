@register
Feature: Register function
As a role
I want feature

	Scenario: Login as a guest
		Given I am a guest user
		When I open 'Home' page
		Then I should see 'myAccount' element
		When I click 'myAccount' element
		Then I should see 'registerButton' element
		When I click 'registerButton' element
		When I input 'registerEmail' element with value 'email'
		When I input 'firstName' element with value 'firstname'
		When I input 'lastName' element with value 'lastname'
		When I input 'newPassword' element with value 'newpassword'
		When I input 'country' element with value 'China'
		Then I click 'iAgree' element
		Then I click 'registerSubmit' element
		Then I should see 'Thank you for registering with PwC.com.' message in 'thankYou' element