/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transactions', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		transitionable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		transitionable_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		transactor: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		transaction_id: {
			type: DataTypes.STRING(255),
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
		tableName: 'transactions'
	});
};
