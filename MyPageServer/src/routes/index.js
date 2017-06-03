import Express from 'express';
let index = Express.Router();

/* GET home page. */
index.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default index;
