const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', cors(), async (req, res) => {
    res.json({ message: 'Method GET not allowed', resMsg : "fetchFailed", status: 405 });
});

//Register
router.post('/register', cors(), async (req, res) => {
    try{
        const { username, email, password, nama_lengkap, nik, no_telp} = req.body;
        if(await prisma.user.findUnique({ where: { email } || { username } || { nik } || {no_telp}})){
            res.json({ message: 'Email / Username / NIK / No Telp sudah terdaftar', resMsg : "alreadyExist", status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({ data: { username, email, password: hashedPassword, nama_lengkap, nik, no_telp, role: 'user' } });
        res.json({ message: 'Berhasil Register', resMsg : "createdSuccess", status: 201 });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Failed to create user', resMsg: "createdFailed", status: 500 });
    }
});

router.post('/login', cors(), async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({ where: { username } });

        if(!user){
            res.json({ message: 'Username tidak ditemukan', resMsg : "usernameNotFound", status: 404 });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            res.json({ message: 'Password salah', resMsg : "passwordIncorrect", status: 401 });
        }
        // dapatkan semua detail data user mulai dari id, username, email, nama_lengkap, nik, no_telp, dan role kemudian elemen field ini dijadikan token
        const token = jwt.sign({ id: user.id, username: user.username, email: user.email, nama_lengkap: user.nama_lengkap, nik: user.nik, no_telp: user.no_telp, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Berhasil Login', resMsg : "loginSuccess", status: 200, token: token });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Failed to log in', resMsg: "loginFailed", status: 500 });
    }
});

module.exports = router;