@digital-skola @login
Feature: Swag Labs - Login - Positive
    
  @positive
  Scenario: As a standard_user, I want to log in successfully 
    Given Fitria is on the login page
    When Fitria login with "standard_user" credential 
    Then Fitria should be on home page

  