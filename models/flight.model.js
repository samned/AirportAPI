const mongoose = require('mongoose');const flightModel = mongoose.Schema({
  flightId: { 
   type: Number, 
   required: 'Flight Id is required!'
  },
  origin: {
   type: String
  },
   destination: {
   type: String
  },
   passenger: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Passenger' 
  }
}, {
  timestamps: true
});module.exports = mongoose.model('Flight', flightModel);