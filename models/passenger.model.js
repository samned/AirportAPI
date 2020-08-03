const mongoose = require('mongoose');const passengerModel = mongoose.Schema({
  passengerId: { 
   type: Number, 
   required: 'PAX Id is required!'
  },
  firstName: {
   type: String
  },
   lastName: {
   type: String
  },
   booking: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Booking' 
  },
  flight: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
  ]
}, {
  timestamps: true
});module.exports = mongoose.model('Passenger', passengerModel);