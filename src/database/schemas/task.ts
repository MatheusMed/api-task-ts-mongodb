import mongoose from 'mongoose';


const Task = new mongoose.Schema({
  title: {
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

Task.statics.deleteById = function (_id) {
  return this.deleteOne({ _id: _id });
};

export default mongoose.model('Task', Task);