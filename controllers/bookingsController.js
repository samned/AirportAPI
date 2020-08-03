const { Booking } = require('../models');const BookingsController = {
  async index(req, res){
    const bookings = await Booking
       .find()
       .populate('bookings');
    res.send(bookings);
  },
  async show(req, res){
    const booking = await Booking
       .findById(req.params.id)
       .populate(‘bookings’);
    res.send(booking);
  }
};module.exports = BookingsController;