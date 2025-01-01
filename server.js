const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://rootadmin:root_ROOT123%21%40%23@cluster1.jlyjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
