const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
 fullname: { 
  firstname: {
    type: String,
    required: true,
    minlength: [3, 'Firstname must be at least 3 characters long']
  },
  lastname: {
    type: String,
    required: true,
    minlength: [3, 'Lastname must be at least 3 characters']
 }
},
email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
},
password: {
  type: String, 
  required: true,
  select: false
},
   socketId: {
   type: String
   },
   status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
   },

   vehicle:{
    color:{
      type: String,
      required: true,
      minlength: [3, 'color must be at least 3 characters long'],

    },
    plate: {
      type: String,
      required: true,
      minlength: [3, 'plate must be at least 3 characters long']
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, 'capacity must be at least 1']
    },
    vehicaleType: {
      type: String,
      required: true,
      enum:['car', 'motorcyle', 'auto']
    },
    
   },
   location: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
   
   }
} )


captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h'})
  return token
}

captainSchema.methods.comparepassword = async function(password) {
  return await bcrypt.compare(password, this.password)
},

captainSchema.statics.hashpassword = async function (password) {
  return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;