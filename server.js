const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

dotenv.config();
connectDB(); // Connexion à MongoDB

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur DB:", err));


  // Exemple route POST pour inscription
app.post('/api/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  // Valider et enregistrer dans MongoDB ici
  res.json({ message: 'Utilisateur enregistré avec succès' });
});

// Routes
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User');
app.use('/api/auth', authRoutes);

// Démarrage serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
