const ItemDao = require('../daos/item.dao');

module.exports.find = async (req, res) => {
    try {
        const filters = req.query;
        const items = await ItemDao.findByFilters(filters);
        res.status(200).send(items);
    } catch (e) {
        // TODO: catch this properly.
        console.log(`Error:`, e.message);
        res.status(500).send('Something went wrong');
    }
};
