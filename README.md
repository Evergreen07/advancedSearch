# Advanced Github Search - Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack & Libraries
- React Js
- CSS
- axios for fetching requests
- Github API for List of Users and Search Results

## Features 
- On load, displays a list of 30 Github users fetched from *Github API*.
- Search Functionality with search api calls occuring through *on-key press* event.
- The Results are Displayed in a **Paginated view** with 5 results each page.
- **Show More** button to view results of the next page.
- During search, the API call starts only after the user has typed *at least 3 characters*.
- In the search functionality, applied **Debouncing** where the *API call takes place after 0.5sec(500ms) after the user stopped typing* and *not* for every character that the user types.
- Implemented **caching of results** for a particular search *keyword*, By storing the keyword & results in Local Storage for sometime. The search works like *first* it checks in the Storage if the results exists and returns it, else makes an API call. (Although same way we can store it for the session by storing in Session storage).
- Implemented features by breaking down the UI into various components.
- Smooth, Clean and Responsive UI with the help of *CSS, CSS Grids and Flexbox, using Media Queries*.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
