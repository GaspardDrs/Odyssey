const express = require('express');
const router = express.Router();
const { db } = require('../conf');

router.get('/', async (req, res) => {
  try {
    const [result] = await db.query('SELECT * from Soldier');
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong !');
  }
});

router.post('/insert', async (req, res) => {
  const userFirtname = req.body.userFirstname;
  sqlRequest = 'INSERT INTO `odyssey`.`Soldier` (`firstname`) VALUES (?)';
  try {
    const [result] = await db.query(sqlRequest, userFirtname);
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(400).send('Something went wrong !');
  }
});

module.exports = router;
