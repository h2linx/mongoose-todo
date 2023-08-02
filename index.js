const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;
const todoRoutes = require('./ROUTES/todoRoutes');
require('dotenv').config();
require('./db')

app.use(cors());

app.use('/todos', todoRoutes);

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.json({
        message: 'the api is working'
    })
});

app.listen(PORT,()=>{
    console.log(`server is runing on PORT ${PORT}`);
})