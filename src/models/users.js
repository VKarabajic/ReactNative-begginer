const users = (sequelize, DataTypes) => {
    return sequelize.define(
        'users',
        {
            first_name: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            last_name: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(125),
                allowNull: true
            },
            phone: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            annonymous: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'users'
        }
    );
};

export default users;
