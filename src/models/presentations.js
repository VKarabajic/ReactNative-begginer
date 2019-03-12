module.exports = function(sequelize, DataTypes) {
    return sequelize.define('presentations', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      speaker: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      start: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'presentations'
    });
  };