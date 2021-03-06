const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
           const songs = await Song.findAll({
               limit: 10
           })
           res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
            })
        }
    },
    async show (req, res) {
        try {
           const song = await Song.findByPk(req.params.songId)
           res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the song by id'
            })
        }
    },
    async post (req, res) {
        try {
           const song = await Song.create(req.body)
           res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create a song.'
            })
        }
    },
}