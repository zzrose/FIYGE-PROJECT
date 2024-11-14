const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  form_name: { type: String, required: true },
  form_data: { type: Object, required: true }, // JSON structure of the form
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);
