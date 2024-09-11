const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;
const db = new sqlite3.Database(':memory:');
const jwtSecret = 'your_secret_key';  // Mude para uma chave secreta mais segura

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuração do banco de dados
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)");
});

// Rota de cadastro
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ success: false, message: 'Erro ao criar senha' });

        db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword], function(err) {
            if (err) return res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário' });

            res.json({ success: true });
        });
    });
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
        if (err || !user) return res.status(401).json({ success: false, message: 'Usuário não encontrado' });

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) return res.status(401).json({ success: false, message: 'Senha incorreta' });

            const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
            res.json({ success: true, token });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
