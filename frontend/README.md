Input
Frontend Input:
Users interact with the frontend interface, primarily through forms.
In the "Add Recipe" form, users input recipe details such as name, ingredients, and cooking instructions.
In the "Update Recipe" form, users can modify existing recipe details.
These form inputs are captured through React state and used as data payloads for HTTP requests to the backend.
Process
Frontend Process:

React components handle user interactions, manage local state, and send HTTP requests to the backend.
Components like AddRecipe and UpdateRecipe capture user input and send it to the server for processing.
Backend Process:

The Express.js backend listens for incoming HTTP requests.
When it receives a POST request with recipe data, it processes the data and inserts a new recipe document into the MongoDB database.
For PATCH requests, the backend updates an existing recipe document in the database.
GET requests to /recipe retrieve all recipes, and GET requests to /recipe/:id retrieve a specific recipe.
DELETE requests to /recipe/:id remove a recipe from the database.
Output
Frontend Output:

The frontend displays recipe information to users.
The "Recipe List" component shows a list of recipes fetched from the backend.
Clicking on a recipe in the list navigates to the "Recipe Details" component, displaying detailed information.
Users can also navigate to the "Update Recipe" component to edit a recipe.
Backend Output:

The backend sends HTTP responses back to the frontend.
Successful operations (e.g., creating, updating, deleting recipes) return status codes (200) and success messages.
Errors during these operations return appropriate status codes (e.g., 400 for bad requests, 404 for not found) and error messages.