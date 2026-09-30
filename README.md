# Networkify

An earlier full-stack social network project built with a React client and a Node.js / Express API backed by MongoDB. The public code includes routes for users, profiles, and posts, with JWT-based authentication.

## Repository layout

- client: React interface
- routes/api: user, profile, and post endpoints
- models: MongoDB data models
- config: database and authentication configuration
- validation: request validation

## Run locally

1. Install the server dependencies with npm install.
2. Install the React dependencies with npm run client-install.
3. Set MONGO_URI and JWT_SECRET in your environment. Use your own development database and a new random signing secret.
4. Start the client and server with npm run dev.

This is a historical code sample from 2020. Review and update dependencies before deploying it to a public environment.
