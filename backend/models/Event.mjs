import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  date: Date
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
