const ItemsDao = require('../daos/item.dao');

const _itemsValues = {
    products: [
        {
            name: 'iPhone X',
            image: 'https://cdn.vox-cdn.com/thumbor/T49kxT-ZhzKjyWWWkVYiOIyAOv4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11249379/jbareham_171101_2099_A_0088_02.jpg'
        }, {
            name: 'iPhone Xr',
            image: 'https://images.macrumors.com/article-new/2018/12/iphone_xr_clear_case_on.jpg'
        }, {
            name: 'Galaxy S10',
            image: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/mediumplus/public/article_images/2019/02/galaxy-s10-home-screen-blank.jpg?itok=ufnugHMY'
        }, {
            name: 'Galaxy S9',
            image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201805/samsung_galaxy_s9_main.png?bkN80pq1B55Yb9EYnR_GWZfLWHkcuS.L'
        }, {
            name: 'Pixel 2',
            image: 'https://cdn57.androidauthority.net/wp-content/uploads/2017/10/google-pixel-2-and-pixel-2-xl-hands-on-aa-1-of-23-840x473.jpg'
        }, {
            name: 'Pixel 3',
            image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-31251/google_pixel_3a_xl-2-1024x768.jpg'
        }, {
            name: 'Nokia 3310',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nokia_3310_blue.jpg/1200px-Nokia_3310_blue.jpg'
        }],
    descriptions: ['Brand new - no scratches.', 'Used for one year.', 'Best phone I had so far', 'Was a good phone, time to let it go.'],
    prices: [300, 450, 600, 780, 820],
    conditions: ['New', 'Used', 'Well worn'],
    locations: ['Boston', 'New York', 'Toronto']
};
const _randomIdx = (array, property) => {
    return array[property][Math.floor(Math.random() * (_itemsValues[property].length))];
};

module.exports.items = async (quantity = 150) => {
    try {
        let items = [];
        await ItemsDao.deleteAll();
        for (let i = 0; i < quantity; i++) {
            let productIdx = Math.floor(Math.random() * (_itemsValues.products.length - 1)),
                item = {
                    name: _itemsValues.products[productIdx].name,
                    image: _itemsValues.products[productIdx].image,
                    description: _randomIdx(_itemsValues, 'descriptions'),
                    price: _randomIdx(_itemsValues, 'prices'),
                    condition: _randomIdx(_itemsValues, 'conditions'),
                    location: _randomIdx(_itemsValues, 'locations'),
                };
            items.push(item);
        }
        await ItemsDao.insertMany(items);
        console.log(`${quantity} items inserted`);
    } catch (e) {
        console.log(`Something went wrong`, e.message);
    }
};
