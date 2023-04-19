# Shopping-List
Created a shopping list app using MongoDB + Express.js, where a user can signup and login to create a shopping list. The user can then add and delete items within the shopping list given the index. If the user is not logged in, all operations should not be allowed.

# Routes
Here is a list of routes:

1. User Signup Route: POST http://localhost:4000/user/signup

    1. Request Body (feel free to use your own test data):
    ```json
    {
        "username": "alexwu",
        "password": "123456"
    }
    ```
    2. the response should be a token of the user

2. User Login Route: POST http://localhost:4000/user/login

    1. Request Body
    ```json
    {
        "username": "alexwu",
        "password": "123456"
    }
    ```
    2. the response should be a token of the user

3. Retrieve the current shopping list: GET http://localhost:4000/shop/list

    1. The request should come with a header of token: the_user_token_here
        1. the user token should be the one that you have received through the login / signup routes
        2. if the token is incorrect, return auth error
    2. the response should be a list of items or an empty list

4. Add a new item: POST http://localhost:4000/shop/add
    1. The request should come with a header of token: the_user_token_here
        1. if the token is incorrect, return auth error
    2. Body
    ```json
    {
        "item": "apple"
    }
    ```
    3. the response should be the new list: (if you have already added an "orange")
    ```javascript
    ['orange', 'apple'];
    ```
5. Delete an item: DELETE http://localhost:4000/shop/delete

    1. The request should come with a header of token: the_user_token_here

        1. if the token is incorrect, return auth error
    2. Body
    ```json
    {
        "item": "apple"
    }
    ```
    3. the response should be a new list

