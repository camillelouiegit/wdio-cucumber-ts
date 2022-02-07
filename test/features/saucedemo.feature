Feature: User is able to Checkout

  Scenario: TC-001 Navigate to Sauce Demo Site
    Given I am on the home page "https://www.saucedemo.com/"
    When I login using <username> and <password>
    Then I should view header title "Products"
  
  Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |

  Scenario: TC-002 Add to Cart
    When I add to cart the items
    # And I click cart icon
    # Then I should view the added items
  