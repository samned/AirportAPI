const mongoose = require('mongoose');const bookingModel = mongoose.Schema({
  bookingId: { 
   type: Number, 
   required: 'Booking Id is required!'
  },
  bookingDate: {
   type: Date
  },
  pnr: {
   type: String
  },
  passenger: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' }
  ]
}, {
  timestamps: true
});module.exports = mongoose.model('Booking', bookingModel);