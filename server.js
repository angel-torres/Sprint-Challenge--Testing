const express = require('express');
const db = require('./data/knexConfig');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello')
})

server.get('/games', async (req, res) => {
    try {
        const games = await db('games');
        res.status(200).json(games)
    } catch (error) {
        res.status(500).json({message:"something went wrong", error})
    }
})

server.post('/games', async (req, res) => {
    try {
        let game = req.body;
        const [id] = await db('games').insert(game, 'id');
        game = await db('games').where({id}).first();
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({message:"something went wrong", error})
    }
});

module.exports = server;