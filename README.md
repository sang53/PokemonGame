## **Pokémon Memory Game**

_Portfolio link: https://portfolio-sang-won-cho.netlify.app/_
_Deployed link: https://sang53-pokemon-memory.netlify.app/_

This project was made as part of The Odin Project to learn React & API data fetching.

In addition to the original project specifications _(shown below)_, I have added additional functionality to make a better game.

Planning & reflection files are located in plan/

## **Functionality**

### General:

- Data is lazy loaded & cached in the app to minimise API calls (without use of external library)
- Pokémon are styled according to their first type

### Start Screen:

- Select desired pokédex to select the pokémon pool from
- Customise the number of pokémon in the pool
- Currentl pool of pokémon is displayed on the screen
- Re-shuffle to re-randomise the pokémon pool
- Start game once ready to play

### Game Screen:

- Displays 10 random pokémon from the pool
- Select a pokémon that has not been selected yet
- Re-shuffle selection pool if unsure or all pokémon have already been selected
- On correct selection, increase the current score & re-randomise selection pool
- On incorrect selection, go to end screen

### End Screen:

- Displays message according to win or lose
- Displays score / out of total pool
- Displays high score & message if new high score was achieved
- Displays the history & order of selected pokémon
- Play Again button to move back to Start Screen

## **Technologies Used**

- React

## **Project Specifications** _(from The Odin Project)_

- Create a new React Project.

- Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API.

  - Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far.
  - There should be a function that displays the cards in a random order anytime a user clicks one.
  - Be sure to invoke that function when the component mounts.

- You also need a handful of cards that display images and possibly informational text.

  - These images and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.

- Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.

- Style your application so you can show it off!

- As always, push the project to GitHub, and don’t forget to deploy it.
