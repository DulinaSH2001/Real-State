
import express from  'express';
const port = 3000;

const app = express();  
mongodb+srv://dulinamern:dulinamongo@cluster0.p75qo8q.mongodb.net/?retryWrites=true&w=majority

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);

});




