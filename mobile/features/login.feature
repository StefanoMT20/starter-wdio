Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message           |
      | pmeza@gmail.com | SuperSecretPassword! | You are logged in!|
    #  | foobar   | barfoo               | Your username is invalid!      |
