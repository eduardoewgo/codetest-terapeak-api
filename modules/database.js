const mongoose = require('mongoose');
const populate = require('../modules/populate');
const databaseUri = require('../credentials');

module.exports = (shouldPopulate) => {
    // Using promise in case that we need to load the db before the app - config, etc.
    return new Promise(async (resolve, reject) => {
        try {
            await mongoose.connect(databaseUri, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log(`Database connected`);

            // Testing purposes only
            if (shouldPopulate) {
                await populate.items(250);
            }
            resolve();
        } catch (e) {
            console.log(`Database error:`, e.message);
            reject();
        }
    })
};
