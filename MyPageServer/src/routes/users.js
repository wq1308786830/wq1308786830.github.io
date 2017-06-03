import Express from 'express';
let users = Express.Router();

/* GET users listing. */
users.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

export default users;
