const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const fruits = [];

app.post('/addFruit', (req, res) => {
  const { fruit } = req.body;
  fruits.push(fruit);
  console.log(fruits);
  res.status(200).json({ message: 'Fruit added successfully!', fruits });
});


app.listen(5000,function(){
    console.log("server started...")
})