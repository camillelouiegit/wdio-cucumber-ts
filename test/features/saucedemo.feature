Feature: User is able to Checkout

  Scenario: TC-001 Navigate to Sauce Demo Site
    Given I am on the home page "https://www.saucedemo.com/"
    When I login using <username> and <password>
    Then I should view header title "Products"

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario: TC-002 Add to Cart
    When I add to cart the items
    And I view my Cart
    Then I should view items added to my Cart

  Scenario: TC-003 Checkout
    When I checkout the items in the cart
    Then I should view the checkout form
    When I input details in the checkout form
    And I click continue
    Then I should view checkout details
    When I click finish
    Then I should view success message
