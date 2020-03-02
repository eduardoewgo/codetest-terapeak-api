const Item = require('../models/item.model');

module.exports.findByFilters = async ({keyword, minPrice, maxPrice, location, conditions, offset, limit}) => {
    let query = {};

    if (minPrice && maxPrice) {
        query.$and = [
            {price: {$gte: minPrice}},
            {price: {$lte: maxPrice}}
        ]
    } else if (minPrice) {
        query.price = {$gte: minPrice}
    } else if (maxPrice) {
        query.price = {$lte: maxPrice}
    }

    if (keyword && keyword.trim() !== '') {
        query.name = {$regex: `.*${keyword}.*`, $options: 'i'}
    }

    if (location) {
        query.location = location;
    }

    if (conditions) {
        if (Array.isArray(conditions) && conditions.length > 0) {
            query.$or = [];
            conditions.forEach(c => {
                query.$or.push({condition: c});
            });
        } else {
            query.condition = conditions;
        }
    }

    console.log(`Query`, JSON.stringify(query));

    return Item.find(query);
};

module.exports.insertMany = async (items) => {
    return Item.insertMany(items);
};

// This obviously wouldn't be in production.
module.exports.deleteAll = async () => {
    return Item.deleteMany({});
};
