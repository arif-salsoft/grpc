/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ads', {
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
		condition: {
			type: DataTypes.STRING(55),
			allowNull: false,
			defaultValue: 'used'
		},
		fuel_type: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'fuel'
		},
		year: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		package_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		vin: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mileage: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
		transmission: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'maual'
		},
		model_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		make_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		adable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		adable_id: {
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
		published: {
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
		},
		rejection_reason: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		featured_end_at: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'ads'
	});
};
