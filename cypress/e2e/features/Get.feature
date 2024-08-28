Feature: Get

        
        Scenario Outline: Get
            Given User is in "https://www.google.com/" webpage
             When Fills "googleSearchInput" field with "alma"
              And Clicks "googleSearchButton" element

        Scenario Outline: Gel
            Given User is in "https://www.google.com/" webpage
             When Fills "googleSearchInput" field with "alma"
              And Clicks "googleSearchButton" element
             