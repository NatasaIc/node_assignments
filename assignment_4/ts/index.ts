import { registerUser, getAccountByUsername } from "./db";
import express, { Express } from "express";
import { Itodo } from "./data/todos";
import * as todosData from "./data/todos";
const utils = require("./utils");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const token = req.headers.authorization;
  // Set the user object on the request.body
  if (token && utils.verifyJWT(token)) {
    const tokenData = utils.decodeJWT(token);
    req.body.user = tokenData;
    req.body.user.isLoggedIn = true;
  } else {
    req.body.user = { isLoggedIn: false };
  }
  // Now we move on to the the next middleware or to the end of the request-response chain
  next();
});

// Force login middleware

const forceAuthorize = (req: any, res: any, next: any) => {
  console.log(req.headers.authorization);
  if (req.body.user.isLoggedIn) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Get start page

app.get("/", (req, res) => {
  res.send(req.body.user);
});

// Register new user

app.post("/register", (req, res) => {
  // Destructuring username and password from request body
  const { username, password } = req.body;
  const hashedPassword = utils.hashPassword(password);

  registerUser(username, hashedPassword, (error: any) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.sendStatus(200);
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  getAccountByUsername(
    username,
    (error: any, account: { hashedPassword: any }) => {
      if (error) {
        res.status(500).send(error);
      } else if (account) {
        const hashedPassword = account.hashedPassword;
        const correctPassword = utils.comparePassword(password, hashedPassword);

        if (correctPassword) {
          const jwtToken = utils.getJWTToken(account);
          res.send(jwtToken);
        } else {
          res.sendStatus(404);
        }
      } else {
        res.sendStatus(404);
      }
    }
  );
});

// Force login to get secrets

app.get("/secrets", forceAuthorize, (req, res) => {
  res.send({
    secret1: "Classes? Syntactical sugar. No less, no more.",
    secret2: "The cake is a lie.",
  });
});

//Todos
//Shows a page with all todos

app.get("/todos", forceAuthorize, (req: any, res: any) => {
  const todos = todosData.getAll();
  res.send(todos);
});

// Shows a page with one todo
app.get("/todos/:id", forceAuthorize, (req, res: any) => {
  const todo = todosData.findById(req.params.id);
  console.log(todo);
  res.sendStatus(200);
});

app.listen(8008, () => {
  console.log("Listening on localhost, port: 8008");
});
