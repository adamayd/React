## Features

#### WATCH OUT FOR FEATURE CREEP

### Minimum Viable Product(MVP) Core Features

* Authenticated Login
* Play against a simple bot
* Guess if opponent is human
* Store game records

### Later Features
* Integrate with Facebook
* Play live against a person
* Show users a leaderboard
* Use real machine learning API

## User Stories

### Loggin In
1. The user may choose to create a new account or login
2. The user enters a username and password and presses login or signup
3. The user is navigated to the site's homepage

### Playing Tic-Tac-Toe
1. The user chooses to start a new game
2. The user is connect with an opponent
3. The user plays through a game of tic-tac-toe
4. When the game is over, the user may guess whether or not the opponent was a human or robot

### Viewing and Editing User Profile
1. Users may navigate to the their profile page from the menu
2. Profile page displays the user's information
3. Profile page also displays a record of the user's last games
4. User may edit their personal information

## Component Guidelines
1. Plan out components for given container
2. Build out the components
3. Create presentational components
4. Hook the containers into the data store
5. Write any mutations the containers might need to take

### Containers
* Connect to the store
* Pass data to children

### Components
* Manage thier own state
* Pass props to presentational components

### Presentational
* Don't manage state
* Change styling based on props