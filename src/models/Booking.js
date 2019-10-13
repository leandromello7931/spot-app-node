const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  
  user: {
    type: mongoose.Schema.Types.ObjectId, //id de user
    ref: 'User' //referencia para o model User
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);