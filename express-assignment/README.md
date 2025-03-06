# Express.js Fundamentals Assignment

## Overview

This project is a simple Express.js application demonstrating RESTful API principles, middleware usage, environment variable handling, and error management. The application includes routes for managing users and products, with a structured project architecture.

## Features

- RESTful API endpoints for users and products
- Middleware for request logging
- Environment variable management with `dotenv`
- Global error handling
- Organized project structure for maintainability

## Project Structure

```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## Installation

### Prerequisites

- Node.js (use NVM to install the latest version)
- npm (comes with Node.js)

### Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/express-assignment.git
   cd express-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and define environment variables (e.g., PORT):
   ```sh
   PORT=3000
   ```

## Usage

### Running the Server

Start the server using:

```sh
npm start
```

For development with live reload:

```sh
npm run dev
```

## API Endpoints

### User Routes

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| POST   | `/users`     | Create a new user |
| GET    | `/users/:id` | Get a user by ID  |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

### Product Routes

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| POST   | `/products`     | Create a new product |
| GET    | `/products/:id` | Get a product by ID  |
| PUT    | `/products/:id` | Update a product     |
| DELETE | `/products/:id` | Delete a product     |

## Middleware

- **Logger Middleware** (`logger.js`): Logs request details (method, URL, timestamp).

## Error Handling

- A global error-handling middleware is implemented to catch and handle errors gracefully.

## Testing

Use **Postman** or **cURL** to test API endpoints:

```sh
curl -X GET http://localhost:3000/users
```

##

##

