const Form = require('../models/Form');

// Save a new form
exports.saveForm = async (req, res) => {
  try {
    const { form_name, form_data } = req.body;
    const newForm = new Form({ form_name, form_data });
    await newForm.save();
    res.status(201).json({ message: 'Form saved successfully', form: newForm });
  } catch (error) {
    res.status(500).json({ message: 'Error saving form', error });
  }
};

// Fetch a form by ID
exports.getForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching form', error });
  }
};

// Update a form by ID
exports.updateForm = async (req, res) => {
  try {
    const { form_name, form_data } = req.body;
    const form = await Form.findByIdAndUpdate(
      req.params.id,
      { form_name, form_data, updated_at: Date.now() },
      { new: true }
    );
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form updated successfully', form });
  } catch (error) {
    res.status(500).json({ message: 'Error updating form', error });
  }
};

// List all forms
exports.listForms = async (req, res) => {
  try {
    const forms = await Form.find({});
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching forms', error });
  }
};
