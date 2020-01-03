/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('media', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mediable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		mediable_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		file_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		primary: {
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
		tableName: 'media'
	});
};
