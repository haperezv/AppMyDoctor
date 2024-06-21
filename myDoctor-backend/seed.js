const mongoose = require('mongoose');
const Doctor = require('./models/doctor');
require('dotenv').config();

const doctors = [
  {
    avatar: "https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true",
    name: "Dr. John Doe",
    specialty: "Neurologist",
    status: true
  },
  {
    avatar: "https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true",
    name: "Dr. Jane Smith",
    specialty: "Orthodontist",
    status: false
  },
  {
    avatar: "https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true",
    name: "Dr. Alan C Braverman",
    specialty: "Cardiologist",
    status: true
  },
  {
    avatar: "https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true",
    name: "Dr. Michael Aaron",
    specialty: "Orthodontist",
    status: false
  },
  {
    avatar: "https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true",
    name: "Dr. Shelley Rahman",
    specialty: "Eye Specialist",
    status: false
  }
];

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  
  // Insert the doctors into the database
  return Doctor.insertMany(doctors);
}).then(() => {
  console.log('Doctors inserted');
  mongoose.connection.close();
}).catch(err => {
  console.error('Error:', err);
  mongoose.connection.close();
});
