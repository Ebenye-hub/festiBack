const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/festiBd', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connexion à MongoDB réussie");

  // Schéma utilisateur simple
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
  });

  const User = mongoose.model('User', userSchema);

  // Insérer un utilisateur test
  const newUser = new User({
    name: 'Utilisateur Test',
    email: 'test@example.com',
    password: '123456',
    role: 'client'
  });

  return newUser.save();
})
.then((result) => {
  console.log("✅ Utilisateur inséré :", result);
  mongoose.disconnect();
})
.catch((err) => {
  console.error("❌ Erreur :", err);
});
