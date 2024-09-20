const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

//db connection 

require('./db/config');
const storeModel = require('./db/bookstoreModel');


app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.post('/upload-book' , async(req,res)=>{
    let data = req.body; 
    const result = new storeModel(data);
    await result.save();
    res.send(result);
})

app.get('/all-books', async(req,resp)=>{
    let result = await storeModel.find();
    
    resp.send(result);
})


app.put('/update-book/:id', async(req,resp)=>{
    let id = req.params.id;
    let data = req.body;
    let result = await storeModel.findByIdAndUpdate({_id : id}, data)

    resp.send(result);
})

app.delete('/delete-book/:id', async(req,resp)=>{
    let id = req.params.id;
    let result = await storeModel.findByIdAndDelete({_id : id});
    resp.send(result);
}) ;


// find by category using query 
app.get('/find-by-category', async(req,resp)=>{
    let query = {}; 
    if(req.query?.category){
        query = {category : req.query.category}
    }
    let result = await storeModel.find(query);
    resp.send(result);
})

// to find one book by id

app.get('/book/:id', async(req,resp)=>{
    let id = req.params.id;
    let result = await storeModel.findById({_id : id});
    resp.send(result);
}); 


const port = process.env.PORT || 4044;

app.listen(port) ;