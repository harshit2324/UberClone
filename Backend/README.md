# User Registration Endpoint

## POST /register

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum 3 characters).
  - `lastname`: A string representing the user's last name (optional, minimum 3 characters if provided).
- `email`: A string representing the user's email (must be a valid email format).
- `password`: A string representing the user's password (minimum 6 characters).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "first name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "password must at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Notes

- Ensure that the email provided is unique and not already registered.
- Passwords are hashed before being stored in the database.

# User Login Endpoint

## POST /login

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object with the following properties:

- `email`: A string representing the user's email (must be a valid email format).
- `password`: A string representing the user's password (minimum 6 characters).

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "password must at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Notes

- Ensure that the email and password provided match an existing user.
- Passwords are hashed before being compared to the stored hash in the database.
