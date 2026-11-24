# Product Page

A single product page built with React and Material UI, with product data served from a small Express API.

## What it does

- Fetches product details (name, price, image, feature list) from `GET /api/product`
- Shows them on a product page built with Material UI components
- Lazy-loads product images

## Stack

- **Client:** React 18, Material UI, React Router, react-lazy-load-image-component
- **Server:** Node.js, Express, CORS

## Running locally

```bash
# API, runs on http://localhost:3001
cd server
npm install
npm run dev

# Client, runs on http://localhost:3000
cd client
npm install
npm start
```

The server has a `vercel.json`, so it can be deployed to Vercel as is.
