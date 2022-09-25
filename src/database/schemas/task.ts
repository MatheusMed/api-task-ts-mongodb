import mongoose from 'mongoose';



const Task = new mongoose.Schema({

  titile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now()
  }

});

export default mongoose.model('Task', Task);