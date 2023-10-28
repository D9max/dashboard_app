const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Mubarak:<password>@cluster0.qabwoxx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleSchema = new mongoose.Schema({

  name: String,
  value: Number,
});

const SampleModel = mongoose.model('Sample', sampleSchema);

app.get('/api/analytics', async (req, res) => {
  try {
    const data = await SampleModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await SampleModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
