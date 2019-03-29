const tracks = (sequelize, DataTypes) => {
    const Tracks = sequelize.define(
        'tracks',
        {
            track1: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            track2: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            track3: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            }
        },
        {
            tableName: 'tracks'
        }
    )
    return Tracks
}

export default tracks
