/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		email_verified_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		package_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		contact: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		remember_token: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		stripe_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		card_brand: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		card_last_four: {
			type: DataTypes.STRING(4),
			allowNull: true
		},
		trial_ends_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		is_dealer: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		company: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		featured_end_at: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		about: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users'
	});
};
