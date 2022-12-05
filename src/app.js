const Subscribers = require('./models/subscribers')
const express = require('express');
const app = express()


// Get Home Page message in the home page

app.get('/',(req,res)=>{
    res.json('Home Page')
})

// Get the response with an array of subscribers (an Object)
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

  //Get the response with an array of subscribers (an Object with only two fields name and subscribedChannel)
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

// Get the response with a subscriber (an Object) with given id. Response with status code 400 and error message ({message: error message}) if id does not match
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
