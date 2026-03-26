# Infilon-Demo-Test (Tenforce)

Test Scenario: Verify Flow to perform career screen under About us menu and than verify "job opening" section after "Life at Tenforce"

1: Use POM (Page Object Mode) design framework:
In this framework, we follow the Page Object Model (POM) design pattern to maintain a clear separation between test logic and page interactions.
We organize the project into two main folders:
Tests Folder
Pages Folder
-> Under tests folder we verify the scenario and flow 
-> Under pages we store our logic - We create method for all the steps and call that method into our spec.ts file 
Main benefit to choose this design framework are code resuability, easy to maintain, with hooks into spec.ts we optimize the code
Also, add .env file for store our main URL we can also store credentials into this file as well. 

2: Explaination of Architechture:
Test file calls a method
Method is defined in Page class
Page class interacts with UI
Assertion is validated in test

3: Command for Run the test: 
npx playwright test tests/dashboardTenforce.spec.ts

Conclusion:
This POM-based architecture helps in building a scalable, maintainable, and reusable automation framework, which is suitable for out projects and aligns with industry best practices.

