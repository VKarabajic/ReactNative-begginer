const feedback = (sequelize, DataTypes) => {
    return sequelize.define('feedback', {
      presentation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'presentations',
          key: 'id'
        },
        unique: "user_presentation_constraint",
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: "user_presentation_constraint",
        primaryKey: true
      },
      rating: {
        type: DataTypes.INTEGER,
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
  
  export default feedback