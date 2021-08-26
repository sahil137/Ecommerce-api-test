# Ecommerce API

A simple Ecommerce API with CRUD capabilities

### Features

The API can do the following:

- Fetch all products
- Add a new product
- Delete product
- Update quantity of the product

### Demo

[To test the api click here](https://ecommerce-api-test.herokuapp.com/)

### EndPoints

It has the following endpoints:

- GET
  - `Root URL`/products
- POST
  - `Root URL`/products/create
- DELETE
  - `Root URL`/products/:id
- PATCH
  - `Root URL`/products/update_quantity?number=`update quantity`

### Setup

- Clone the repo to your machine
- Navigate into `cd ../Ecommerce_API`
- Run `npm install` to install all dependencies.
- In `Ecommerce_API/config/mongoose.js` replace proccess.env.CONNECTION_URL with your database/connection url
- Run `npm start` to start the server. You will be able to access it at localhost:8000

### Built With

- [Node.js](https://nodejs.org/en/) - Backend javascript runtime environment and is used for server side programming
- [MongoDB](https://www.mongodb.com/) - NoSQL database used to store data in JSON documents
- [express](https://expressjs.com/) - Express is a minimal and flexible Node.js framework
