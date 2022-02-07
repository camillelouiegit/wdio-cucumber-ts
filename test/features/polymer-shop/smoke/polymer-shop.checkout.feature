Feature: User is able to Navigate, Add to shirt to Cart, and Checkout in the Polymer Shop

  Scenario: Navigate to Shirt Sections
    Given I am on the home page "https://shop.polymer-project.org/"
    When I navigate to <MensOuter> section
    Then I should view all shirt List
    Examples:
      | MensOuter       | LadiesOuter      | MensShirt   | LadiesShirt    |
      | Men's Outerwear | Ladies Outerwear | Men's Shirt | Ladies T-Shirt |

  Scenario: Select and Add to Cart Ladies outerwears
    When I select a random shirt
    Then I should view the details of the shirt
    When I click Add To Cart
    And I click View Cart
    Then I should view the added Tshirt

  Scenario: Checkout and Place Order
    When I click Checkout button in the Cart
    Then I should view the Checkout form
    When I enter all required fields in the Checkout form and click Place Order
    Then I should view "Thank you" message