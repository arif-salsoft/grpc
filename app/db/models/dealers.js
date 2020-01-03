/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dealers', {
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
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		featured_end_at: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		package_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		about: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		contact: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		zipcode: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		remember_token: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		accepted_privacy: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
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
		tableName: 'dealers'
	});
};
