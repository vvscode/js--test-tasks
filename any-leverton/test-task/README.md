# Code-challenge

We would like to find out what your approach when faced with a concrete challenge is. What is your way of thinking? How do you tackle the problem? Which tools do you choose?
To measure these qualities, we have created a challenge for you to complete. 


## Basic description

This is a react + Redux project.
It provides the following functionality:

- Show a list of teams in the company on the right-hand side of the screen (block Teams)
    - Show the name of the team and the amount of members
    - Allow the user to select and deselect every team in the list
- Show a list of company employees on the right-hand side of the screen (block Employees)
- Show members of selected teams on the left-hand side of the screen, ordered by position
- Allow an employee to be part of multiple teams
- Allow the user to remove employees from teams (by clicking the "X" button)
- All data is "fetched" from Backend-mock, so you don't need to run any servers

## Running
```js
    npm install
    npm start
```

## What needs to be done

As you will see, the code is far from being ideal. Everything is put in App.js, magic constants, the file structure is odd.

- Start with refactoring: split the components, add a folder structure that fits your vision of a good project, make it scalable, groom the reducers, actions. Feel free to change whatever you want, but leave the "backend-mock.js" file as it is now – it's just an API-simulation.

- Add a data loading indicator (preloading animation) to the app-start.
- Add a new functionality: allow the user to drag'n'drop employees from the **Employees** panel to the team blocks on the left. Use any external libraries you want if needed.


## Bonus tasks

- An **Employee** object has unused property - "maxTeams". This is the only difference between **Employee** and **Manager**. Let's use this property. Add a validation: do not allow to add employee to the team if he already exceeded this limit.
- Persist the team selection across page refresh
- Create shareable links with team preselection (e.g. add routing)

## Rules
The only rule is a time limit. Use everything you need - add any external libraries, change code or the project structure, names of the files - anything that will make a project fit your vision and goals of this code-challenge. 