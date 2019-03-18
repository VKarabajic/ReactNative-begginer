const presentations = (sequelize, DataTypes) => {
    const Presentation = sequelize.define('presentations', {
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

    return Presentation
};

export default presentations