const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Importar rutas
const doctorsRouter = require('./routes/doctors');
const appointmentsRouter = require('./routes/appointments');

// Usar rutas
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
