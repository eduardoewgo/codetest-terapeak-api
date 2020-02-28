const ItemDao = require('../daos/item.dao');

module.exports.find = async (req, res) => {
    try {
        // TODO: properly set the filters.
        const items = await ItemDao.findByFilters({});
        res.status(200).send(items);
    } catch (e) {
        // TODO: catch this properly.
        res.status(500).send('Something went wrong');
    }
};
