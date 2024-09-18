Feature: Searching on Google

        Scenario Outline: Get
            Given User is on "https://www.google.com/" page
             When User types "alma" in "googleSearchInput"
              And User "clicks" "googleSearchButton"
             Then "googleText" should have "Alma" "text"

             