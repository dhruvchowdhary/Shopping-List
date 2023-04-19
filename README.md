# Shopping-List
Created a shopping list app using MongoDB + Express.js, where a user can signup and login to create a shopping list. The user can then add and delete items within the shopping list given the index. If the user is not logged in, all operations should not be allowed.

# Routes
Here is a list of routes:

User Signup Route: POST http://localhost:4000/user/signup

Request Body (feel free to use your own test data):

```javascript
{
    "username": "alexwu",
    "password": "123456"
}
```
the response should be a token of the user

User Login Route: POST http://localhost:4000/user/login

Request Body
```javascript
{
    "username": "alexwu",
    "password": "123456"
}
```
the response should be a token of the user

Retrieve the current shopping list: GET http://localhost:4000/shop/list

The request should come with a header of token: the_user_token_here
the user token should be the one that you have received through the login / signup routes
if the token is incorrect, return auth error
the response should be a list of items or an empty list
Add a new item: POST http://localhost:4000/shop/add

The request should come with a header of token: the_user_token_here

if the token is incorrect, return auth error
Body
```javascript
{
    "item": "apple"
}
```
the response should be the new list: (if you have already added an "orange")
```javascript
['orange', 'apple'];
```
Delete an item: DELETE http://localhost:4000/shop/delete

The request should come with a header of token: the_user_token_here

if the token is incorrect, return auth error
Body
```javascript
{
    "item": "apple"
}
```
the response should be a new list

