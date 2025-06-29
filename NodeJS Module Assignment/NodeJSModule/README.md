# Node.js Express REST API Assignment

## Instructions
1. Clone or unzip the repo
2. Run `npm install`
3. Set your environment variables in `.env`
4. Start server with `npm run dev` or `npm start`

## API Endpoints
- `GET /` – Hello World
- `POST /api/auth/register` – Register
- `POST /api/auth/login` – Login
- `GET /api/items` – List items
- `POST /api/items` – Add item (auth required)
- `PUT /api/items/:id` – Update item (auth required)
- `DELETE /api/items/:id` – Delete item (auth required)

## Testing
Run `npm test` to test endpoints with Jest and Supertest
