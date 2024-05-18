module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      director: {
        type: DataTypes.STRING,
        allowNull: false
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Movie;
  };
  