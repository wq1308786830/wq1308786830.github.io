/**
 * Created by flyin on 2017/6/3.
 */
import { Router } from 'express';
let spaApi = Router();

/* GET home page. */
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
spaApi.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

export default spaApi;