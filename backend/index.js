// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const wordRouter = require('./Routes/wordRoute');
const adminRouter = require('./Routes/adminRoute');
const db = require('./db');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.send('heel')
})


app.use('/admin',adminRouter)

// Use wordRouter for word-related routes
app.use('/',wordRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
