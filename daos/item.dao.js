const Item = require('../models/item.model');

module.exports.findByFilters = async (keyword, filters) => {
    return Item.find(filters);
};

module.exports.insertMany = async (items) => {
    return Item.insertMany(items);
};

// This obviously wouldn't be in production.
module.exports.deleteAll = async () => {
    return Item.deleteMany({});
};
