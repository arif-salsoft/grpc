/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('packages', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'ad'
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		months: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '1'
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		no_images: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		},
		created_by: {
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
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'packages'
	});
};
