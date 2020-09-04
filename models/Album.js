const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const AlbumSchema = new Schema ({
  title: {
    type:  String,
    required: [true, 'Please add a title'] 
  },
  image: {
    type:  String,
    required: [true, 'Please add an image']
  
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  header: {
    type: String,
    required: [true, 'Please add a header']
  },
  yt: {
    type: String,
    required: [true, 'Please add a video']
  },
});

//collection users
// User users Users user

module.exports = mongoose.model('Album', AlbumSchema)