# Node.js Express Sequelize Authentication API

This is a Node.js and Express application using Sequelize ORM for database management and JWT for authentication. It is structured for scalability and maintainability, and it uses MySQL as the database.


## Project Structure

```bash
project/
├── config/
│   ├── config.json           # Environment-specific database configurations
│   └── database.js           # Sequelize instance setup
├── controllers/
│   └── authController.js     # Handles authentication logic
├── middlewares/
│   └── authMiddleware.js     # Middleware to protect routes
├── migrations/               # Sequelize database migrations
├── models/
│   ├── index.js              # Loads all Sequelize models
│   └── user.js               # User model definition
├── routes/
│   ├── authRoutes.js         # Authentication routes (register, login)
│   └── protectedRoutes.js    # Example of protected routes
├── seeders/                  # Sequelize seeders (if needed)
├── app.js                    # Main application entry point
└── package.json              # Dependencies and scripts
```

## Installation

### Clone the repository
```bash
git clone git@github.com:prazzolgautam62/node-express-mysql.git
cd node-express-mysql
```

### Install dependencies
```bash
npm install
```

### Configure environment variables
Create a .env file in the root directory and add the following variables
```bash
PORT=3000
JWT_SECRET=your_secret_key
```
 ### Set up your database
 Edit config/config.json with your MySQL credentials and run the migrations:
 ```bash
 npx sequelize-cli db:migrate
 ```

 ## Usage

 ### Run the development server
 ```bash
 npm run dev
 ```

 ### Use the following endpoints
 - POST /api/auth/register: Register a new user.
 - POST /api/auth/login: Log in to get a JWT token.
 - GET /api/protected/dashboard: Access a protected route (requires token).

 ## Technologies Used
 - Node.js
 - Express
 - Sequelize ORM
 - MySQL
 - JSON Web Tokens (JWT)
 - bcrypt.js
