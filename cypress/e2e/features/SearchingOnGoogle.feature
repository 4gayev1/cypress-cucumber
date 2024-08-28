Feature: Searching on Google

        Scenario Outline: Get
            Given User is on "https://www.google.com/" webpage
             When Type "alma" in "googleSearchInput"
              And Click "googleSearchButton"
             Then "googleText" should have "Alma" text

             