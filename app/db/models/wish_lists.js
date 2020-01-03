/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wish_lists', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		product_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'wish_lists'
	});
};
