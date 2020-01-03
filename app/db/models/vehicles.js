/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vehicles', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		model_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		make_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		vehicleable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		vehicleable_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		featured: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		soled: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
		tableName: 'vehicles'
	});
};
