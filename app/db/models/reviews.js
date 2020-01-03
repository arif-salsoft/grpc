/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reviews', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rating: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		customer_service_rating: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		quality_rating: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		friendly_rating: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pricing_rating: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		recommend: {
			type: DataTypes.ENUM('Yes','No'),
			allowNull: false
		},
		department: {
			type: DataTypes.ENUM('Sales','Service','Parts'),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		body: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		approved: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		reviewrateable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		reviewrateable_id: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		author_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		author_id: {
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
		}
	}, {
		tableName: 'reviews'
	});
};
