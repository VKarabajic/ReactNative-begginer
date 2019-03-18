const feedback = (sequelize, DataTypes) => {
    const Feedback = sequelize.define(
        'feedbacks',
        {
            rating: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        },
        {
            tableName: 'feedbacks'
        }
    )
    return Feedback
}

export default feedback
