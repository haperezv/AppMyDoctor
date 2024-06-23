const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');

// Ruta para crear una cita
router.post('/', async (req, res) => {
  const { doctorId, date, time } = req.body;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(400).json({ message: 'Doctor not found' });
    }

    const newAppointment = new Appointment({
      doctor: doctorId,
      date,
      time
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Ruta para obtener todas las citas
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('doctor');
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


