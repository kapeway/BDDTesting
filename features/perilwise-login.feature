@perilwiseLogin
Feature: Logging in to perilwise website
  As a registered user
  In order to access my claims and policy data
  I want to be able to login to the website
  
  Scenario: Logging in to perilwise website using a registered user account
    When I login to perilwise website using username "kavinfranco19@gmail.com" and password "asdQWE123"
    Then I should see "Kavinfranco Devadhas" in the welcome message

  Scenario: Logging in to perilwise website using a registered user account with incorrect password
    When I login to perilwise website using username "kavinfranco19@gmail.com" and password "wrongpassword"
    Then I should see "Invalid Email or Passowrd! Please try again" as an error message
