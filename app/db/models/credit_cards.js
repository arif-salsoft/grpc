/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('credit_cards', {
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
		number: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		exp_month: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		exp_year: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		cvc: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		stripe_pm_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		default: {
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
		}
	}, {
		tableName: 'credit_cards'
	});
};
