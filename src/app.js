const Subscribers = require('./models/subscribers')
const express = require('express');
const app = express()


// Get Home Page message in the home page

app.get('/',(req,res)=>{
    res.json('Home Page')
})


app.get("/subscribers", (req, res) => { 
    const subscribers = req.params; 
    Subscribers 
      .find(subscribers) 
      .then((data) => { 
        res.json(data); 
      }) 
      .catch((err) => { 
        console.log(err); 
      }); 
  });

  app.get("/subscribers/names", (req, res) => { 
    Subscribers 
    .find({}).select('-_id -subscribedDate -__v')   
    .then((data) => { 
      res.json(data); 
    }) 
    .catch((err) => { 
      console.log(err); 
    }); 
  });


  app.get('/subscribers/:id', async (req, res) => {
    const _id =req.params.id
    try{
        const data = await   Subscribers .findById(_id);

        if(!data) {
            error = Error ('error statement')
            res.status(400).json({message :error.message} )
            }
             else { res.json(data)}

         } catch(error){
        res.status(400).json({message: error.message})
    }});



















module.exports = app;
