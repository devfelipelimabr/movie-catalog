const db = require('../models');

exports.getMovies = async (req, res) => {
  try {
    const movies = await db.Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await db.Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await db.Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await db.Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await movie.update(req.body);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await db.Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await movie.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
