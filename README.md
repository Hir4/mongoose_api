<div align="center" id="top"> 
  <img align="center" width="300px" src="https://miro.medium.com/max/300/1*fY5KPXK0C6csHKhnXkQQ8g.png" alt="Mongodb Icon" />
</div>

<h1 align="center">Mongoose API</h1>

<p align="center">
  <img alt="Main language of the project" src="https://img.shields.io/github/languages/top/Hir4/mongoose_api?color=86DC3D">

  <img alt="Quantity of language used" src="https://img.shields.io/github/languages/count/Hir4/mongoose_api?color=86DC3D">
</p>

<br>

## :dart: About ##

Project using Node, Express and Mongoose to create an API that access MongoDB database and make all the CRUD operations.

## :rocket: Technologies ##

- [Node]
- [Express]
- [Mongoose]

## :white_check_mark: Prerequisite ##

Before start and assuming that you already clone the repository, if not you can run: 
```bash
git clone https://github.com/Hir4/mongoose_api.git && cd mongoose_api
```
After that, it is time to install the dependencies by running:
```bash
npm install
```

## :checkered_flag: Running

Now we are ready to go and run with nodemon, if you want you can change the script in package.json:
```bash
npm run server
```
or without:
```bash
node server.js
```

## :world_map: Routes

### `GET '/'`
Await find all clients and response:
```json
[
  {
    "_id": <ObjectID>,
    "name": <String>,
    "age": <Number>,
    "salary": <Number>,
    "__v": <Number>
  }
]
```
Status can be: 200(everything ok) or 500(something went wrong in the server)

### `GET '/:id'`
Await find by id the client and response:
`Name of the client`
Status can be: 200(everything ok), 404(id not found) or 500(something went wrong in the server)

### `POST '/'`
Await to create a new client and response:
```json
[
  {
    "_id": <ObjectID>,
    "name": <String>,
    "age": <Number>,
    "salary": <Number>,
    "__v": <Number>
  }
]
```
Status can be: 201(something was created) or 400(user did something wrong)

### `PATCH '/:id'`
Await to update a specific parte of the client and response:
```json
[
  {
    "_id": <ObjectID>,
    "name": <String>,
    "age": <Number>,
    "salary": <Number>,
    "__v": <Number>
  }
]
```
Status can be: 200(everything ok), 400(user did something wrong), 404(id not found) or 500(something went wrong in the server)

### `DELETE '/:id'`
Await to remove the client and response:
```json
{
  "message": <String>
}
```
Status can be: 200(everything ok), 404(id not found) or 500(something went wrong in the server)