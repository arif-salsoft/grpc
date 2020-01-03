/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subscriptions', {
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
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stripe_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stripe_status: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stripe_plan: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		trial_ends_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ends_at: {
			type: DataTypes.DATE,
			allowNull: true
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
		tableName: 'subscriptions'
	});
};
