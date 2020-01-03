/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_logs', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		loggable_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		loggable_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		subject: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		method: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ip: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		agent: {
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
		tableName: 'activity_logs'
	});
};
