# Main Goal

Your task is to make a project using Angular 4+ that uses a REST API based on NodeJS using Serverless and DynamoDB. 

The application has to handle a database of authors and their publications. 
Create a public repository (github or other service) and upload the code.

Do not forget to include a clear documentation that allows us to start and test the project locally. Anything that is not specified here is up to your criteria.

## Functional / Technical requirements

- You are asked to create an API to perform CRUD (Create, Read, Update and Delete) operations.
- This project must be prepared to be deployed to different environments without modifying the code.
- Use SASS and follow the component development approach for your frontend.
- Use BEM and adapt your layout to be responsive with media queries
- Each endpoint and its possible errors should be tested using https://github.com/visionmedia/supertest
- Create a single lambda function for each endpoint. DO NOT use express, and serverless-http.

## Model

- Each publication needs to have the date and time, body and title.
- Each author needs to have their name, email and date of birth.

## View

- The front-end needs to show the publication list ordered by date, as well as the name of the author <name, email>.
- The user should be able to invert the order of the publications showing the oldest ones first.
- All the authors should be listed in a sidebar, and the user should be able to click on one and see a list of all of his/her publications.
- The user should also be able to search for publications by title (this has to be paginated).
