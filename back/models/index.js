const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const EventItem = require('./event_item');
const EventItemHistory = require('./event_item_history');
const EventItemLike = require('./event_item_likes');
const Review = require('./review');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.EventItem = EventItem;
db.EventItemHistory = EventItemHistory;
db.EventItemLike = EventItemLike;
db.Review = Review;

User.init(sequelize);
EventItem.init(sequelize);
EventItemHistory.init(sequelize);
EventItemLike.init(sequelize);
Review.init(sequelize);

User.associate(db);
EventItem.associate(db);
EventItemHistory.associate(db);
EventItemLike.associate(db);
Review.associate(db);

module.exports = db;
