const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  doorTime: {
    type: String
  },
  duration: {
    type: Number
  },
  endTime: {
    type: String
  },
  eventStatus:{
    type: String
  },
  location: {
    type: String
  },
  maximumAttendeeCapacity: {
    type: Number
  },
  isAccessibleForFree:{
    type: String
  }
}, 
{
  timestamps: true,
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
