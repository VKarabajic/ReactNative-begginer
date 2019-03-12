module.exports = function(sequelize, DataTypes) {
    return sequelize.define('feedback', {
      presentation_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'presentations',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      rating: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'feedback'
    });
  };
  
  