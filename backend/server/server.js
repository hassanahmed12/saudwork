
const { cloudinary } = require('./utils/cloudinary');
const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const mongoose = require('mongoose');
var cors = require('cors');
let FirstName=require('./utils/FirstName.MOdal')

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
const port = process.env.PORT || 3001;
const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://has123:AvpS2olNuXqOahzi@cluster0.q4wh9.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true , useCreateIndex: true ,useUnifiedTopology: true}
    );

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.get('/firstName', async (req, res) => {
    FirstName.find()
        .then(firstnames => res.json(firstnames))
        .catch(err => res.status(400).json('Error: ' + err));
        const publicIds = resources.map((file) => file.public_id);
        res.send(publicIds);
    
});
app.post('/firstName/upload', async (req, res) => {
    try {
     //   const fileStr = req.body.data;
     //   const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    //        upload_preset: 'jazsoft',
       // });
console.log(req.body)
  const firstName = req.body.firstName;
  const city =req.body.city;
  const contactno=req.body.contactno;
  //const imageUrl = uploadResponse.secure_url;

  const newUser = new FirstName({
    firstName,city,contactno})
 newUser.save()
    .then(() => res.json('fistname added! response from server'))
    .catch(err => {console.log("catch",err)
    // res.status(400).json('Error: ' + err)
  });
        
        console.log(req.body.firstName);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
